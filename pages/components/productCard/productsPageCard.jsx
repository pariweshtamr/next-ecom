import React from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../redux/slice/cartSlice"
import { ProductItemContainer } from "./productsPageCardStyles"
import AddIcon from "@mui/icons-material/Add"
import Link from "next/link"
import { motion } from "framer-motion"
const ProductsPageCard = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <ProductItemContainer>
      <div className="product-item">
        <div className="product-img">
          <Link href={`/products/${product.id}`}>
            <img src={product.img} alt={product.name} />
          </Link>
        </div>
        <div className="product-info">
          <h2 className="product-name">{product.detail}</h2>
          <span>{product.name}</span>
        </div>

        <div className="product-card-bottom">
          <span className="price">${product.price}</span>
          <motion.span
            whileTap={{ scale: 1.2 }}
            onClick={() => handleAddToCart(product)}
          >
            <AddIcon />
          </motion.span>
        </div>
      </div>
    </ProductItemContainer>
  )
}

export default ProductsPageCard
