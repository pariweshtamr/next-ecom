import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"
import { NavbarStyles } from "./navbarStyles"

const Navigation = () => {
  return (
    <NavbarStyles>
      <Navbar expand="lg" className="text-dark">
        <Container className="nav-container">
          <Navbar.Brand href="#home" className="app-logo">
            <Image src="/img/logo.png" alt="logo" width="100" height="100" />
            <Link href="/">
              <span>Next Store</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-item">
              <Nav.Link href="/">HOME</Nav.Link>
              <NavDropdown title="SHOP" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">SHOP</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">CART</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">ABOUT</Nav.Link>
              <Nav.Link href="#link">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarStyles>
  )
}

export default Navigation
