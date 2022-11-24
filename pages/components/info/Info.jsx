import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { InfoStyles } from "./infoStyles"
import { motion } from "framer-motion"

const Info = () => {
  return (
    <InfoStyles className="bg-light">
      <Container className="info-container">
        <Row>
          <Col md={5} sm={12} className="info-left"></Col>
          <Col md={7} className="info-right">
            <motion.div
              initial={{ opacity: 0, y: "2rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, type: "spring" }}
              className="info-heading"
            >
              <h2>Better Way to Ship Your Products</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "2rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, type: "spring" }}
              className="info-content mt-4"
            >
              <p>
                But nothing the copy said could convince her and so it didn’t
                take long until a few insidious Copy Writers ambushed her, made
                her drunk with Longe and Parole and dragged her into their
                agency, where they abused her for their.
              </p>
            </motion.div>

            <Row className="services">
              <Col lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: "2rem" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, type: "spring" }}
                  className="service-item"
                >
                  <div className="service-icon">
                    <img src="/img/s1.png" alt="Refund" />
                  </div>
                  <div className="service-info">
                    <h3>Refund Policy</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </motion.div>
              </Col>
              <Col lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: "2rem" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, type: "spring" }}
                  className="service-item"
                >
                  <div className="service-icon">
                    <img src="/img/s2.png" alt="Packaging" />
                  </div>
                  <div className="service-info">
                    <h3>Premium Packaging</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </motion.div>
              </Col>
              <Col lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: "2rem" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, type: "spring" }}
                  className="service-item"
                >
                  <div className="service-icon">
                    <img src="/img/s3.png" alt="Quality" />
                  </div>
                  <div className="service-info">
                    <h3>Superior Quality</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </InfoStyles>
  )
}

export default Info
