import Image from "next/image"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import { NewStockStyles } from "./newStockStyles"

const NewStock = () => {
  return (
    <NewStockStyles>
      <Container className="new-container">
        <Row>
          <Col md={8} className="new-top">
            <div className="new-top-img"></div>
          </Col>
          <Col md={4}>
            <div className="new-text py-3">
              <h2 className="mb-4">
                New Women's Clothing Summer Collection 2019
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <Link href="/">
                <button>Shop now</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </NewStockStyles>
  )
}

export default NewStock
