import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import ProductsCard from "../productCard/productsCard"
import { BestSellerStyles } from "./bestSellerStyles"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../loader/Loader"
import { fetchAllProducts } from "../../../redux/action/productAction"

const BestSeller = () => {
  const dispatch = useDispatch()
  const [prods, setProds] = useState([])
  const [shouldFetch, setShouldFetch] = useState(true)
  const { isLoading, products } = useSelector((state) => state.product)

  useEffect(() => {
    shouldFetch && dispatch(fetchAllProducts())
    setShouldFetch(false)
    setProds(products)
  }, [dispatch, products])

  return (
    <BestSellerStyles className="bg-light">
      <Container>
        <Row className="mb-3 pb-3">
          <Col md={12} className="heading">
            <motion.h2
              initial={{ opacity: 0, y: "2rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, type: "spring" }}
              className="mb-4"
            >
              Best Sellers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: "2rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </motion.p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="bp-row">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {prods.length !== 0
                ? prods.map((product) => (
                    <motion.div
                      initial={{ opacity: 0, y: "2rem" }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 2, type: "spring" }}
                      className="col-sm col-md-6 col-lg best-products"
                      key={product.id}
                    >
                      <ProductsCard prod={product} />
                    </motion.div>
                  ))
                : ""}
            </>
          )}
        </Row>
      </Container>
    </BestSellerStyles>
  )
}

export default BestSeller
