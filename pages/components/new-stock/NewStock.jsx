import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import { NewStockStyles } from "./newStockStyles"
import { motion } from "framer-motion"

const NewStock = () => {
  return (
    <NewStockStyles>
      <Container className="new-container">
        <Row className="new-row">
          <Col md={8} className="new-top">
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.5,
              }}
              className="new-top-img"
            ></motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.5,
              }}
              className="new-text py-3"
            >
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
            </motion.div>
          </Col>
        </Row>

        <Row className="new-row-bottom">
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.5,
              }}
              className="new-text-2"
            >
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
            </motion.div>
          </Col>
          <Col md={5}>
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.5,
              }}
              className="new-bottom-img"
            ></motion.div>
          </Col>
        </Row>
      </Container>
    </NewStockStyles>
  )
}

export default NewStock
