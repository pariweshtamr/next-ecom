import { HeroStyles } from "./HeroStyles"
import { RiShoppingBagFill } from "react-icons/ri"
import { BsArrowRight } from "react-icons/bs"
import Image from "next/image"

const Hero = () => {
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
        <div className="circle"></div>
        <Image
          src="/img/herobg.png"
          alt="hero"
          width="2000"
          height="1994"
          className="hero-img"
        />
        <div className="hero-cart">
          <div className="svg1">
            <RiShoppingBagFill />
          </div>

          <div className="hero-signup">
            <span>Best Signup Offers!</span>
            <div className="svg2">
              <BsArrowRight />
            </div>
          </div>
        </div>
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
