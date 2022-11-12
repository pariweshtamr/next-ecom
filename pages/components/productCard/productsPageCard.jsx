import React from "react"
import {
  ProductItemContainer,
  ProductItemImage,
  ProductItemInfo,
  ProductItemPrice,
  ProductLink,
} from "./productsPageCardStyles"

const ProductsPageCard = ({ product }) => {
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
            <div className="cart-bttn">Add to Cart</div>
          </div>
        </ProductItemInfo>
      </div>
    </ProductItemContainer>
  )
}

export default ProductsPageCard
