import { LatestDesignStyles } from "./latestDesignStyles"
import Image from "next/image"
const LatestDesign = () => {
  return (
    <LatestDesignStyles>
      <div className="try-left">
        <span>Latest Designs</span>
        <span>The ultimate Nike Collection!</span>
        <span>Buy Now!</span>
        <Image
          src="/img/shade.png"
          alt="shade"
          width="200"
          height="100"
        ></Image>
      </div>
      <div className="try-right">
        <div className="wrapper">
          <video autoPlay={true} muted={true} loop>
            <source src="/img/nike.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </LatestDesignStyles>
  )
}

export default LatestDesign
