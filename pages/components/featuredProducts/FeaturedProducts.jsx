import { ProductsStyles } from "./productsStyles"
import Image from "next/image"
import { ProductsData } from "../../../public/data/products"
import { useEffect, useState } from "react"
import ProductsCard from "../productCard/productsCard"
import { db } from "../../../firebase/firebase-config"
import { collection, getDocs } from "firebase/firestore"
import { useDispatch, useSelector } from "react-redux"
import { getProductsSuccess } from "../../../redux/slice/productSlice"

const FeaturedProducts = () => {
  const [menuProducts, setMenuProducts] = useState([])
  const { products } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  const getProds = async () => {
    let prods = []
    try {
      const querySnapshot = await getDocs(collection(db, "products"))
      querySnapshot.forEach((doc) => {
        const { id } = doc
        const data = { ...doc.data(), id }
        prods.push(data)
        // doc.data() is never undefined for query doc snapshots
      })
      setMenuProducts(prods)
      dispatch(getProductsSuccess(prods))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProds()
  }, [])

  const filter = (type) => {
    if (type) {
      setMenuProducts(ProductsData.filter((product) => product.type === type))
    } else {
      setMenuProducts(ProductsData)
    }
  }
  return (
    <ProductsStyles>
      <Image
        src="/img/plane.png"
        className="title-img"
        width={150}
        height={100}
        alt="plane"
      ></Image>
      <h1>Our Featured Products</h1>

      <div className="products">
        <ul className="menu">
          <li onClick={() => filter()}>All</li>
          <li onClick={() => filter("outdoor")}>Outdoor</li>
          <li onClick={() => filter("indoor")}>Indoor</li>
        </ul>

        <div className="list">
          {menuProducts?.map((product) => (
            <div className="product" key={product.id}>
              <ProductsCard prod={product} />
            </div>
          ))}
        </div>
      </div>
    </ProductsStyles>
  )
}

export default FeaturedProducts
