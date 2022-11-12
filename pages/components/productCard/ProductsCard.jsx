import Image from "next/image"
import Link from "next/link"
import { ProductsCardStyles } from "./productsCardStyles"

const ProductsCard = ({ prod }) => {
  return (
    <Link href={`/products/${prod.id}`} passhref>
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
    </Link>
  )
}

export default ProductsCard
