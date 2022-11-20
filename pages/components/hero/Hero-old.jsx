import { HeroStyles } from "./HeroStyles"
import { RiShoppingBagFill } from "react-icons/ri"
import { BsArrowRight } from "react-icons/bs"
import { motion } from "framer-motion"
import Link from "next/link"

const Hero = () => {
  const transition = { duration: 3, type: "spring", stiffness: 100 }
  return (
    <HeroStyles>
      {/* Left side */}
      <div className="hero-sides">
        <span className="hero-text1">High quality Footwear</span>

        <div className="hero-text2">
          <span>Trendy Collection</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            ratione?
          </span>
        </div>
      </div>

      {/* middle */}
      <div className="hero-img-wrapper">
        <motion.div
          transition={transition}
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0" }}
          className="circle"
        ></motion.div>

        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0" }}
          src="/img/2.png"
          alt="hero"
          className="hero-img"
        />

        <motion.div
          transition={transition}
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          className="hero-cart"
        >
          <div className="svg1">
            <RiShoppingBagFill />
          </div>

          <Link href="/collection">
            <div className="hero-signup">
              <span>Our Collection!</span>
              <div className="svg2">
                <BsArrowRight />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* right-side */}
      <div className="hero-sides">
        <div className="hero-traffic">
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className="hero-customers">
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </HeroStyles>
  )
}

export default Hero
