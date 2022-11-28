import { Rating } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../redux/slice/cartSlice"
import { ProductsCardStyles } from "./productsCardStyles"
import StarIcon from "@mui/icons-material/Star"
import { IoIosCart } from "react-icons/io"

const ProductsCard = ({ prod }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <ProductsCardStyles>
      <div className="top">
        <Link href={`/products/${prod.id}`} className="top">
          <Image
            src={prod.img}
            alt="product"
            className="img-product"
            width="800"
            height="800"
          />
        </Link>

        <div className="action-btn">
          <button onClick={() => handleAddToCart(prod)}>Add to cart +</button>
          <button>
            Buy Now{" "}
            <span>
              <IoIosCart />
            </span>
          </button>
        </div>
      </div>

      <div className="text py-3 px-3">
        <h3>{prod.name}</h3>

        <div className="text-bottom">
          <div className="pricing">
            <p className="price">${prod.price}</p>
          </div>

          <Rating
            value={4}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
            readOnly
          />
        </div>
      </div>
    </ProductsCardStyles>
  )
}

export default ProductsCard
