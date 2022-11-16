import React from "react"
import { ServicesStyles } from "./servicesStyles"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import AutorenewIcon from "@mui/icons-material/Autorenew"
import PaymentsIcon from "@mui/icons-material/Payments"
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange"

const Services = () => {
  return (
    <ServicesStyles>
      <div className="service-item">
        <div className="service-icon">
          <LocalShippingIcon />
        </div>
        <div className="service-detail">
          <h3>Free Shipping</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="service-item">
        <div className="service-icon">
          <AutorenewIcon />
        </div>
        <div className="service-detail">
          <h3>Free Shipping</h3>
          <p>Lorem ipsum doit amet.</p>
        </div>
      </div>
      <div className="service-item">
        <div className="service-icon">
          <PaymentsIcon />
        </div>
        <div className="service-detail">
          <h3>Free Shipping</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="service-item">
        <div className="service-icon">
          <CurrencyExchangeIcon />
        </div>
        <div className="service-detail">
          <h3>Free Shipping</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </ServicesStyles>
  )
}

export default Services
