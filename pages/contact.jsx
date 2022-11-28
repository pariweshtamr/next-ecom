import { Col, Container, Row } from "react-bootstrap"
import { ContactStyles } from "../styles/ContactStyles"
import MainLayout from "./components/mainLayout/MainLayout"

const contact = () => {
  return (
    <MainLayout>
      <ContactStyles>
        <Container>
          <Row className="top">
            <Col md={12} className="contacts">
              <div className="contact-item">
                <h6>
                  Address: <span>Sydney, Australia</span>
                </h6>
              </div>
              <div className="contact-item">
                <h6>
                  Phone: <span>+61 999999999</span>
                </h6>
              </div>
              <div className="contact-item">
                <h6>
                  Email: <span>info@nextstore.com.au</span>
                </h6>
              </div>
              <div className="contact-item">
                <h6>
                  Website: <span>www.nextstore.com.au</span>
                </h6>
              </div>
            </Col>
          </Row>

          <Row className="bottom">
            <Col md={6} className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.4496152309334!2d151.20859841559604!3d-33.85230182563485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae5d25ead5e3%3A0x68948eb717c0c43e!2sSydney%20Harbour%20Bridge!5e0!3m2!1sen!2sau!4v1669674200786!5m2!1sen!2sau"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
            <Col md={6} className="form-col">
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="text" placeholder="Subject" />
                <textarea
                  name=""
                  placeholder="Message"
                  style={{
                    maxHeight: "12rem",
                    height: "12rem",
                    minHeight: "12rem",
                  }}
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </Col>
          </Row>
        </Container>
      </ContactStyles>
    </MainLayout>
  )
}

export default contact
