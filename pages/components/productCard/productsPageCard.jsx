import React from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../redux/slice/cartSlice"
import {
  ProductItemContainer,
  ProductItemImage,
  ProductItemInfo,
  ProductItemPrice,
  ProductLink,
} from "./productsPageCardStyles"

const ProductsPageCard = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <ProductItemContainer>
      <div className="">
        <ProductLink href={`/products/${product.id}`} passHref>
          <ProductItemImage src={product.img} alt={product.name} />
        </ProductLink>
        <ProductItemInfo>
          <h3>{product.detail}</h3>
          <h2>{product.name}</h2>
          {/* <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating> */}
          <div className="add-cart">
            <ProductItemPrice>${product.price}</ProductItemPrice>
            <div className="cart-bttn" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </div>
          </div>
        </ProductItemInfo>
      </div>
    </ProductItemContainer>
  )
}

export default ProductsPageCard
