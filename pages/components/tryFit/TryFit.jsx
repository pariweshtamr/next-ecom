import { TryFitStyles } from "./tryFitStyles"
import Image from "next/image"
const TryFit = () => {
  return (
    <TryFitStyles>
      <div className="try-left">
        <span>Virtual Try-On</span>
        <span>Never buy the wrong shade again!</span>
        <span>Try Now!</span>
        <Image
          src="/img/shade.png"
          alt="shade"
          width="200"
          height="100"
        ></Image>
      </div>
      <div className="try-right">
        <div className="wrapper">
          <video width="450" height="350" controls>
            <source src="/img/nike.mp4" type="vide/mp4" />
          </video>
        </div>
      </div>
    </TryFitStyles>
  )
}

export default TryFit
