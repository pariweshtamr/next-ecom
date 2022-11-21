import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { InfoStyles } from "./infoStyles"

const Info = () => {
  return (
    <InfoStyles className="bg-light">
      <Container className="info-container">
        <Row>
          <Col md={5} className="info-left"></Col>
          <Col md={7} className="info-right">
            <div className="info-heading">
              <h2>Better way to ship your Products</h2>
            </div>

            <div className="info-content mt-4">
              <p>
                But nothing the copy said could convince her and so it didn’t
                take long until a few insidious Copy Writers ambushed her, made
                her drunk with Longe and Parole and dragged her into their
                agency, where they abused her for their.
              </p>
            </div>

            <Row className="services">
              <Col lg={4}>
                <div className="service-item">
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
                </div>
              </Col>
              <Col lg={4}>
                <div className="service-item">
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
                </div>
              </Col>
              <Col lg={4}>
                <div className="service-item">
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
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </InfoStyles>
  )
}

export default Info
