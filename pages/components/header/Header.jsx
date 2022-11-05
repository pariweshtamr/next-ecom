import { HeaderStyles } from "./headerStyles"
import { CgShoppingBag } from "react-icons/cg"
import { GoThreeBars } from "react-icons/go"
import { FaUserCircle } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../../firebase/firebase-config"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { logoutSuccess, setActiveUser } from "../../../redux/slice/authSlice"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { userInfo } = useSelector((state) => state.auth)
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

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(logoutSuccess())
        toast.success("Logout Successful.")
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
          {!userInfo.userId ? (
            <>
              <li>
                <Link href="/login">Sign in</Link>
              </li>
              <li>
                <Link href="/register">Sign up</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <FaUserCircle size={16} /> <span>Hi, {userInfo.username}</span>
              </li>
              <li>
                <Link href="/profile">My Profile</Link>
              </li>
              <li onClick={logoutUser} className="logout-btn">
                Sign out
              </li>
            </>
          )}
        </ul>
        <input type="text" placeholder="Search..." className="header-search" />

        <CgShoppingBag className="header-cart">Cart Icon</CgShoppingBag>
      </div>
    </HeaderStyles>
  )
}

export default Header
