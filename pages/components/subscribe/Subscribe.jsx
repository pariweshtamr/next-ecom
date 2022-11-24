import { Col, Container, Row } from "react-bootstrap"
import { SubscribeStyles } from "./subscribeStyles"

const Subscribe = () => {
  return (
    <SubscribeStyles>
      <Container>
        <Row className="py-5">
          <Col md={12} className="text-center">
            <h2>Subscribe to our Newsletter</h2>
            <div className="mt-5">
              <form action="" className="subscribe-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email address"
                  />
                  <input
                    type="submit"
                    value="subscribe"
                    className="submit px-3"
                  />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </SubscribeStyles>
  )
}

export default Subscribe
