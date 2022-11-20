import React from "react"
import { Col, Row, Container } from "react-bootstrap"
import Image from "next/image"
import { HeroStyles } from "./HeroStyles"
import { motion } from "framer-motion"

const Hero = () => {
  const transition = { duration: 3, type: "spring", stiffness: 100 }

  return (
    <HeroStyles>
      <Row className="hero">
        <Col md={6} className=" hero-left-col">
          <div className="hero-left">
            <div className="left-top">
              <h6>Next Ecommerce Shop</h6>
              <hr />
            </div>

            <div className="hero-banner">
              <div className="hb-tag">
                <h5>Best Ecommerce online shop</h5>
              </div>
              <div className="hb-main">
                <div className="hero-banner-title">
                  <h4 className="hb-h4">Catch Your Own</h4>
                  <h4>Style & Look</h4>
                </div>

                <div className="hero-banner-p">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis, maxime sed temporibus reprehenderit facere in
                    nihil corrupti laborum voluptatibus totam!
                  </p>
                </div>

                <button>Discover Now</button>
              </div>
            </div>
          </div>
        </Col>
        <div className="hero-right-col">
          <Image src="/img/about-2.jpg" alt="logo" width="900" height="900" />
        </div>
      </Row>
    </HeroStyles>
  )
}

export default Hero
