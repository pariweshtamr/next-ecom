import { SliderStyles } from "./sliderStyles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
// import swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SliderProducts } from "../../../public/data/products"
import ProductsCard from "../productCard/productsCard"
import { useEffect, useState } from "react"

const Slider = () => {
  const [sliderProds, setSliderProds] = useState([])

  useEffect(() => {
    setSliderProds(SliderProducts)
  }, [SliderProducts])
  return (
    <SliderStyles>
      <Swiper
        breakpoints={{
          856: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={30}
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
