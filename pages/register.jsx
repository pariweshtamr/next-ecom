import { Col, Container, Row } from "react-bootstrap"
import { RegisterStyles } from "../styles/RegisterStyles"
import MainLayout from "./components/mainLayout/MainLayout"
import RegisterForm from "./components/register/RegisterForm"

const Register = () => {
  return (
    <MainLayout>
      <RegisterStyles>
        <Container>
          <Row>
            <Col md={6}>
              <div className="img-container">
                <img src="/img/register.png" alt="" style={{ width: "100%" }} />
              </div>
            </Col>
            <Col md={6}>
              <RegisterForm />
            </Col>
          </Row>
        </Container>
      </RegisterStyles>
    </MainLayout>
  )
}

export default Register
