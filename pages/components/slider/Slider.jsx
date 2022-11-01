import { SliderStyles } from "./sliderStyles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
// import swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SliderProducts } from "../../../public/data/products"
import ProductsCard from "../productCard/productsCard"

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
            <ProductsCard prod={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderStyles>
  )
}

export default Slider
