import Image from "next/image"
import { ProductsCardStyles } from "./productsCardStyles"

const ProductsCard = ({ prod }) => {
  return (
    <ProductsCardStyles>
      <div className="left-s">
        <div className="name">
          <span>{prod.name}</span>
          <span>{prod.detail}</span>
        </div>

        <span>${prod.price}</span>
        <div>Add to cart</div>
      </div>
      <Image
        src={prod.img}
        alt="slider-product"
        className="img-product"
        width="800"
        height="800"
      />
    </ProductsCardStyles>
  )
}

export default ProductsCard
