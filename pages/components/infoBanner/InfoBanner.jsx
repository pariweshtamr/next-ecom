import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { InfoBannerStyles } from "./infoBannerStyles"

const InfoBanner = () => {
  return (
    <InfoBannerStyles className="py-2 bg-black">
      <Container>
        <Row>
          <Col lg={12}>
            <Row>
              <Col md={4} className="info-item">
                <div className="text-light d-flex">
                  <span></span>
                  <span>+61 299 999 999</span>
                </div>
              </Col>
              <Col md={4} className="info-item">
                <div className="text-light d-flex">
                  <span></span>
                  <span>INFO@NEXTSTORE.COM.AU</span>
                </div>
              </Col>
              <Col md={4} className="info-item">
                <div className="text-light d-flex">
                  <span></span>
                  <span>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </InfoBannerStyles>
  )
}

export default InfoBanner
