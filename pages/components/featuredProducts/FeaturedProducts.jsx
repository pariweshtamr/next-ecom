import { FeaturedProductsStyles } from "./productsStyles"
import Image from "next/image"
import { ProductsData } from "../../../public/data/products"
import { useEffect, useState } from "react"
import ProductsCard from "../productCard/productsCard"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../../../redux/action/productAction"

const FeaturedProducts = () => {
  const [menuProducts, setMenuProducts] = useState([])
  const [shouldFetch, setShouldFetch] = useState(true)

  const { products } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    shouldFetch && dispatch(fetchAllProducts())
    setShouldFetch(false)
    setMenuProducts(products)
  }, [dispatch, setShouldFetch, products])

  const filter = (type) => {
    if (type) {
      setMenuProducts(ProductsData.filter((product) => product.type === type))
    } else {
      setMenuProducts(ProductsData)
    }
  }
  return (
    <FeaturedProductsStyles>
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
    </FeaturedProductsStyles>
  )
}

export default FeaturedProducts
