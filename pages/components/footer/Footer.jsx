import { FooterStyles } from "./footerStyles"
import Image from "next/image"
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineLogin,
  HiOutlineUsers,
  HiOutlineLink,
} from "react-icons/hi"
import { FiPhoneCall } from "react-icons/fi"
import { MdOutlinePolicy } from "react-icons/md"

const Footer = () => {
  return (
    <FooterStyles>
      <hr />
      <div className="footer-container">
        <div className="footer-logo">
          <Image
            src="/img/logo.png"
            width="200"
            height="200"
            alt="logo"
          ></Image>
          <span>Next Store</span>
        </div>

        <div className="footer-block">
          <div className="footer-details">
            <span>Contact Us</span>
            <span className="icon-line">
              <HiOutlineLocationMarker className="icon" />
              <span>123 George Street, Sydney, NSW 2000</span>
            </span>
            <span className="icon-line">
              <FiPhoneCall className="icon" />
              <span>02 999 9999</span>
            </span>
            <span className="icon-line">
              <HiOutlineMail className="icon" />
              <span>nextnikestore@gmail.com</span>
            </span>
          </div>
        </div>

        <div className="footer-block">
          <div className="footer-details">
            <span>Account</span>
            <span className="icon-line">
              <HiOutlineLogin className="icon" />
              <span>Sign in</span>
            </span>
          </div>
        </div>

        <div className="footer-block">
          <div className="footer-details">
            <span>Company</span>
            <span className="icon-line">
              <HiOutlineUsers className="icon" />
              <span>About Us</span>
            </span>
          </div>
        </div>

        <div className="footer-block">
          <div className="footer-details">
            <span>Resources</span>
            <span className="icon-line">
              <HiOutlineLink className="icon" />
              <span>Privacy Policy</span>
            </span>
            <span className="icon-line">
              <MdOutlinePolicy className="icon" />
              <span>Terms & Conditions</span>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-end">
        <span>Copyright @2022 by Next Store, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </FooterStyles>
  )
}

export default Footer