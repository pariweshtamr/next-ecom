import { ProductsStyles } from "./productsStyles"
import Image from "next/image"
import { ProductsData } from "../../../public/data/products"
import { useState } from "react"
import ProductsCard from "../productCard/productsCard"

const Products = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductsData)

  const filter = (type) => {
    if (type) {
      setMenuProducts(ProductsData.filter((product) => product.type === type))
    } else {
      setMenuProducts(ProductsData)
    }
  }
  return (
    <ProductsStyles>
      <Image src="/img/plane.png" width={150} height={100} alt="plane"></Image>
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
