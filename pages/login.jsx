import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { LoginStyles } from "../styles/LoginStyles"
import LoginForm from "./components/login/LoginForm"
import MainLayout from "./components/mainLayout/MainLayout"

const Login = () => {
  return (
    <MainLayout>
      <LoginStyles>
        <Container>
          <Row>
            <Col md={6}>
              <LoginForm />
            </Col>
            <Col md={6}>
              <div className="img-container">
                <img src="/img/login.png" alt="" style={{ width: "100%" }} />
              </div>
            </Col>
          </Row>
        </Container>
      </LoginStyles>
    </MainLayout>
  )
}

export default Login
