import Image from "next/image"
import { ProductCardStyles } from "./productCardStyles"

const ProductsCard = ({ prod }) => {
  return (
    <ProductCardStyles>
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
        width="200"
        height="200"
      />
    </ProductCardStyles>
  )
}

export default ProductsCard
