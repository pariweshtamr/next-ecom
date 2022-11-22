import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ProductsCard from "../productCard/productsCard"
import { BestSellerStyles } from "./bestSellerStyles"

const BestSeller = () => {
  return (
    <BestSellerStyles className="bg-light">
      <Container>
        <Row className="mb-3 pb-3">
          <Col md={12} className="heading">
            <h2 className="mb-4">Best Sellers</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm md={6} lg className="best-products">
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
          </Col>
        </Row>
      </Container>
    </BestSellerStyles>
  )
}

export default BestSeller
