import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ProductsCard from "../productCard/productsCard"
import { BestSellerStyles } from "./bestSellerStyles"
import { motion } from "framer-motion"

const BestSeller = () => {
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
          <motion.div
            initial={{ opacity: 0, y: "2rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="col-sm col-md-6 col-lg best-products"
          >
            <ProductsCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "2rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="col-md-6 col-sm col-lg best-products"
          >
            <ProductsCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "2rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="col-md-6 col-sm col-lg best-products"
          >
            <ProductsCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "2rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="col-md-6 col-sm col-lg best-products"
          >
            <ProductsCard />
          </motion.div>
        </Row>
      </Container>
    </BestSellerStyles>
  )
}

export default BestSeller
