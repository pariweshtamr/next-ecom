import Info from "./components/info/Info"
import MainLayout from "./components/mainLayout/MainLayout"
import Subscribe from "./components/subscribe/Subscribe"
import Testimonials from "./components/testimonials/Testimonials"

const About = () => {
  return (
    <MainLayout>
      <Info />
      <Testimonials />
      <hr />
      <Subscribe />
    </MainLayout>
  )
}

export default About
