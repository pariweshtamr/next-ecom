import { HeaderStyles } from "./headerStyles"
import { CgShoppingBag } from "react-icons/cg"
import { GoThreeBars } from "react-icons/go"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
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
        </ul>
        <input type="text" placeholder="Search..." className="header-search" />

        <CgShoppingBag className="header-cart">Cart Icon</CgShoppingBag>
      </div>
    </HeaderStyles>
  )
}

export default Header
