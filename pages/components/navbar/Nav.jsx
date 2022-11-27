import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"
import { NavbarStyles } from "./navbarStyles"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../../firebase/firebase-config"
import { logoutSuccess, setActiveUser } from "../../../redux/slice/authSlice"
import { FaUserCircle } from "react-icons/fa"
import { toast } from "react-toastify"
import { Badge } from "@mui/material"
import { motion } from "framer-motion"
import { CgShoppingBag } from "react-icons/cg"

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const { totalQuantity } = useSelector((state) => state.cart)
  const router = useRouter()
  const dispatch = useDispatch()

  // Monitor currently signed In User

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setActiveUser({
            username: user.displayName,
            email: user.email,
            userId: user.uid,
          })
        )
      } else {
        dispatch(logoutSuccess())
      }
    })
  }, [dispatch])

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(logoutSuccess()) && toast.success("Logout Successful.")
        router.push("/")
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }
  return (
    <NavbarStyles>
      <Navbar expand="lg" className="text-dark">
        <Container className="nav-container">
          <div className="app-logo">
            <Image src="/img/logo.png" alt="logo" width="100" height="100" />
            <Link href="/">
              <span>Next Store</span>
            </Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-item">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <NavDropdown title="SHOP" id="basic-nav-dropdown">
                  <li>
                    <Link href="/products">SHOP</Link>
                  </li>
                  <li>
                    <Link href="/cart">CART</Link>
                  </li>
                </NavDropdown>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT</Link>
              </li>

              {!userInfo.userId ? (
                <div className="auth-section">
                  <li>
                    <Link href="/login">SIGN IN</Link>
                  </li>
                  <li>
                    <Link href="/register">SIGN UP</Link>
                  </li>
                </div>
              ) : (
                <div className="mx-5">
                  <li>
                    <FaUserCircle size={18} />{" "}
                    <span>Hi, {userInfo.username}</span>
                  </li>
                  <li>
                    <Link href="/profile">My profile</Link>
                  </li>
                  <li onClick={logoutUser} className="logout-btn">
                    Sign out
                  </li>
                </div>
              )}

              <motion.li whileTap={{ scale: 1.2 }}>
                <Badge badgeContent={totalQuantity} color="secondary">
                  <Link href="/cart" passHref>
                    <CgShoppingBag size={18} className="header-cart">
                      Cart Icon
                    </CgShoppingBag>
                  </Link>
                </Badge>
              </motion.li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarStyles>
  )
}

export default Navigation
