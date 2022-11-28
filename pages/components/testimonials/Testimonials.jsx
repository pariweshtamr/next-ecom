import { TestimonialsStyles } from "./testimonialsStyles"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper"
import { TestimonialsData } from "../../../public/data/testimonials"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"
import { FaQuoteLeft } from "react-icons/fa"

const Testimonials = () => {
  return (
    <TestimonialsStyles>
      <Container>
        <Row>
          <Col md={12} className="title">
            <h2 className="mb-4 text-center">Our satisfied customer says</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="t-carousal">
              <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
                modules={[Pagination, Autoplay]}
                pagination={{
                  dynamicBullets: true,
                }}
                className="t-swiper"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  1400: {
                    slidesPerView: 3,
                  },
                  856: {
                    slidesPerView: 2,
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
                      <div className="user-img mb-4">
                        <Image src={testimonial.image} alt="profile" />
                        <div className="quote">
                          <FaQuoteLeft />
                        </div>
                      </div>

                      <div className="text">
                        <p className="mb-5 px-4 line">{testimonial.comment}</p>
                        <p className="name">{testimonial.name}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </TestimonialsStyles>
  )
}

export default Testimonials
