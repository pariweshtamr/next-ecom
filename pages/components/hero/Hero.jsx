import React from "react"
import { Col, Row, Container } from "react-bootstrap"
import Image from "next/image"
import { HeroStyles } from "./HeroStyles"
import { motion } from "framer-motion"

const Hero = () => {
  const transition = { duration: 1, type: "spring" }

  return (
    <HeroStyles>
      <Row className="hero">
        <Col md={6} className=" hero-left-col">
          <div className="hero-left">
            <div className="left-top">
              <motion.h6
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: "spring", delay: 1.8 }}
              >
                Next Ecommerce Shop
              </motion.h6>
              <hr />
            </div>

            <div className="hero-banner">
              <div className="hb-tag">
                <motion.h5
                  initial={{ opacity: 0, x: "-5rem", rotate: 180 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    delay: 1,
                  }}
                >
                  Best Ecommerce online shop
                </motion.h5>
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

                <motion.button
                  whileTap={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: "5rem" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    delay: 0.5,
                  }}
                >
                  Discover Now
                </motion.button>
              </div>
            </div>
          </div>
        </Col>
        <div className="hero-right-col">
          <motion.img
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={transition}
            src="/img/about-2.jpg"
            alt="logo"
          />
        </div>
      </Row>
    </HeroStyles>
  )
}

export default Hero
