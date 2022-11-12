import { ProductsStyles } from "./productsStyles"
import Image from "next/image"
import { ProductsData } from "../../../public/data/products"
import { useEffect, useState } from "react"
import ProductsCard from "../productCard/productsCard"
import { db } from "../../../firebase/firebase-config"
import { collection, getDocs } from "firebase/firestore"

const Products = () => {
  const [MenuProducts, setMenuProducts] = useState([])

  const getProds = async () => {
    let prods = []
    const querySnapshot = await getDocs(collection(db, "products"))
    querySnapshot.forEach((doc) => {
      prods.push(doc.data())
      // doc.data() is never undefined for query doc snapshots
      setMenuProducts(prods)
    })
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
          {MenuProducts?.map((product, i) => (
            <div className="product" key={i}>
              <ProductsCard prod={product} />
            </div>
          ))}
        </div>
      </div>
    </ProductsStyles>
  )
}

export default Products
