import { TestimonialsStyles } from "./testimonialsStyles"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { TestimonialsData } from "../../../public/data/testimonials"

const Testimonials = () => {
  return (
    <TestimonialsStyles>
      <div className="testimonials-top">
        <div className="t-container">
          <span>Top Rated</span>
          <span>
            Play with extreme comfort. Maximise your speed in the field!
          </span>
        </div>

        <Image
          src="/img/herobg.png"
          width="1100"
          height="1100"
          alt="testimonial-img"
        ></Image>

        <div className="t-container">
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>

      <div className="t-title">Reviews</div>

      <div className="t-carousal">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className="t-swiper"
          breakpoints={{
            1400: {
              slidesPerView: 4,
            },
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
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial">
                <Image src={testimonial.image} alt="profile"></Image>
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </TestimonialsStyles>
  )
}

export default Testimonials
