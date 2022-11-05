import { HeaderStyles } from "./headerStyles"
import { CgShoppingBag } from "react-icons/cg"
import { GoThreeBars } from "react-icons/go"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../../../firebase/firebase-config"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successful.")
        router.push("/login")
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }
  return (
    <HeaderStyles>
      <div className="app-logo">
        <Image src="/img/logo.png" alt="logo" width="100" height="100" />
        <span>Next Store</span>
      </div>

      <div className="header-right">
        <div className="header-bars">
          <GoThreeBars onClick={toggleMenu} />
        </div>
        <ul
          className="header-menu"
          style={{ display: showMenu ? "none" : "inherit" }}
        >
          <li>
            <Link href="/login">Sign in</Link>
          </li>
          <li>
            <Link href="/register">Sign up</Link>
          </li>
          <li>
            <Link href="/profile">My Profile</Link>
          </li>
          <li onClick={logoutUser} className="logout-btn">
            Logout
          </li>
        </ul>
        <input type="text" placeholder="Search..." className="header-search" />

        <CgShoppingBag className="header-cart">Cart Icon</CgShoppingBag>
      </div>
    </HeaderStyles>
  )
}

export default Header
