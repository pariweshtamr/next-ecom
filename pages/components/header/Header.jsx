import { HeaderStyles } from "./headerStyles"
import { CgShoppingBag } from "react-icons/cg"
import Image from "next/image"

const Header = () => {
  return (
    <HeaderStyles>
      <div className="app-logo">
        <Image src="/img/logo.png" alt="logo" width="100" height="100" />
        <span>Next Store</span>
      </div>

      <div className="header-right">
        <ul className="header-menu">
          <li>Collections</li>
          <li>New</li>
          <li>On Sale</li>
          <li>ENG</li>
        </ul>
        <input type="text" placeholder="Search..." className="header-search" />

        <CgShoppingBag className="header-cart">Cart Icon</CgShoppingBag>
      </div>
    </HeaderStyles>
  )
}

export default Header
