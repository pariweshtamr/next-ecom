import { SliderStyles } from "./sliderStyles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
// import swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SliderProducts } from "../../../public/data/products"
import Image from "next/image"

const Slider = () => {
  return (
    <SliderStyles>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>

              <span>${slide.price}</span>
              <div>Shop Now</div>
            </div>
            <Image
              src={slide.img}
              alt="slider-product"
              className="img-product"
              width="200"
              height="200"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderStyles>
  )
}

export default Slider
