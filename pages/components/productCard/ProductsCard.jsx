import Image from "next/image"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../redux/slice/cartSlice"
import { ProductsCardStyles } from "./productsCardStyles"

const ProductsCard = ({ prod }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <ProductsCardStyles>
      <div className="left-s">
        <div className="name">
          <span>{prod.name}</span>
          <span>{prod.detail}</span>
        </div>

        <span>${prod.price}</span>
        <div onClick={() => handleAddToCart(prod)}>Add to cart</div>
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
