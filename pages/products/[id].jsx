import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductById } from "../../redux/action/productAction"
import { ProductPageStyles } from "../../styles/ProductPageStyles"
import Loader from "../components/loader/Loader"
import MainLayout from "../components/mainLayout/MainLayout"
import { motion } from "framer-motion"
import { addToCart } from "../../redux/slice/cartSlice"

const Product = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { id } = router.query
  const { isLoading, error, selectedProduct } = useSelector(
    (state) => state.product
  )

  useEffect(() => {
    dispatch(fetchProductById(id))
  }, [dispatch, id])

  const handleAddToCart = (selectedProduct) => {
    dispatch(addToCart(selectedProduct))
  }
  return (
    <MainLayout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductPageStyles>
          <div className="back-link">
            <Link href="/collection"> &#60; Back to product list</Link>
          </div>
          <div className="wrapper">
            <div className="info-container">
              <motion.h1
                initial={{ x: -500 }}
                transition={{ duration: 1, type: "spring", stiuffness: 100 }}
                whileInView={{ x: 0 }}
                className="prod-brand"
              >
                <i>{selectedProduct.name}</i>
              </motion.h1>
              <motion.h2
                initial={{ x: -500 }}
                transition={{ duration: 1, type: "spring", stiuffness: 100 }}
                whileInView={{ x: 0 }}
                className="prod-title"
              >
                <i>{selectedProduct.detail}</i>
              </motion.h2>

              <p className="prod-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam nulla, fugiat soluta illo cum deserunt! Eos ullam
                consequuntur tempora. Cumque delectus reprehenderit a? Quidem
                sed maxime quam! Necessitatibus, inventore maxime.
              </p>
              <div className="action-block">
                <h1 className="prod-price">
                  <i>${selectedProduct.price}</i>
                </h1>
                <button
                  className="cart-bttn"
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  <i>Add to Cart</i>
                </button>
              </div>
            </div>
            <motion.div
              initial={{ x: 500 }}
              transition={{ duration: 1, type: "spring", stiuffness: 100 }}
              whileInView={{ x: 0 }}
              className="img-container"
            >
              <img src={selectedProduct.img} alt={selectedProduct.detail} />
            </motion.div>
          </div>
        </ProductPageStyles>
      )}
    </MainLayout>
  )
}

export default Product
