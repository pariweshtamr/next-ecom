import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"
import { NavbarStyles } from "./navbarStyles"

const Navigation = () => {
  return (
    <NavbarStyles>
      <Navbar bg="light" expand="lg" className="text-dark">
        <Container className="px-5">
          <Navbar.Brand href="#home" className="app-logo">
            <Image src="/img/logo.png" alt="logo" width="100" height="100" />
            <Link href="/">
              <span>Next Store</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex gap-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Shop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Cart</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarStyles>
  )
}

export default Navigation
