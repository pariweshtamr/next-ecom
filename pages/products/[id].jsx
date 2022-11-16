import Link from "next/link"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductById } from "../../redux/action/productAction"
import { ProductPageStyles } from "../../styles/ProductPageStyles"
import Loader from "../components/loader/Loader"
import MainLayout from "../components/mainLayout/MainLayout"
import { motion } from "framer-motion"
import { addToCart } from "../../redux/slice/cartSlice"
// import Rating from "../components/rating/Rating"
import { Rating } from "@mui/material"
import StarIcon from "@mui/icons-material/Star"

import ProductsList from "../components/productsList/ProductsList"

const Product = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [tab, setTab] = useState("desc")
  const [ratingValue, setRatingValue] = useState()
  const reviewUser = useRef("")
  const reviewMsg = useRef("")
  const { id } = router.query
  const { isLoading, selectedProduct } = useSelector((state) => state.product)

  const reviews = [
    {
      id: 1,
      rating: 4.5,
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      name: "John Doe",
    },
  ]

  useEffect(() => {
    dispatch(fetchProductById(id))
  }, [dispatch, id])

  const handleAddToCart = (selectedProduct) => {
    dispatch(addToCart(selectedProduct))
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser?.current?.value
    const reviewUserMsg = reviewMsg?.current?.value

    const reviewObj = {
      username: reviewUserName,
      text: reviewMsg,
      rating: ratingValue,
    }
  }
  return (
    <>
      <Head>
        <title>Next-Store - {selectedProduct.detail}</title>
      </Head>
      <MainLayout>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductPageStyles>
            <div className="back-link">
              <Link href="/collection"> &#60; Back to product list</Link>
            </div>
            <section className="product-wrapper">
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
                  <i>{selectedProduct.detail}</i>{" "}
                  <span>Type: {selectedProduct.type}</span>
                </motion.h2>

                <motion.div
                  initial={{ x: -500 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    type: "spring",
                    stiuffness: 100,
                  }}
                  whileInView={{ x: 0 }}
                  className="product-rating"
                >
                  <Rating
                    name="read-only"
                    value={2.5}
                    readOnly
                    emptyIcon={<StarIcon style={{ color: "gray" }} />}
                  />
                </motion.div>

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
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="cart-bttn"
                    onClick={() => handleAddToCart(selectedProduct)}
                  >
                    <i>Add to Cart</i>
                  </motion.button>
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
            </section>

            <section className="product-page-bottom">
              <div className="tab-wrapper">
                <h3
                  className={`${tab === "desc" ? "active-tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h3>
                <h3
                  className={`${tab === "rev" ? "active-tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews({reviews.length})
                </h3>
              </div>

              {tab === "desc" ? (
                <div className="tab-content">
                  <p>{selectedProduct.detail}</p>
                </div>
              ) : (
                <div className="product-review">
                  <div className="review-wrapper">
                    <ul>
                      {reviews?.map((review) => (
                        <li key={review.id}>
                          <h4>{review.name}</h4>
                          <span>{review.rating} (rating)</span>
                          <p>{review.review}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review-form">
                      <h2>Leave your experience</h2>
                      <form onSubmit={handleReviewSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Name"
                            ref={reviewUser}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <Rating
                            name="simple-controlled"
                            value={ratingValue ?? 0}
                            onChange={(e, newValue) => {
                              setRatingValue(newValue)
                            }}
                            emptyIcon={<StarIcon style={{ color: "gray" }} />}
                          />
                          <textarea
                            rows={8}
                            placeholder="Review Message..."
                            ref={reviewMsg}
                            required
                          />
                        </div>

                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className="review-bttn"
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </ProductPageStyles>
        )}
      </MainLayout>
    </>
  )
}

export default Product
