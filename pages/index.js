import Head from "next/head"
import Hero from "./components/hero/Hero"
import MainLayout from "./components/mainLayout/MainLayout"
import FeaturedProducts from "./components/featuredProducts/FeaturedProducts"
import Slider from "./components/slider/Slider"
import Testimonials from "./components/testimonials/Testimonials"
import LatestDesign from "./components/latestDesign/LatestDesign"
import { ToastContainer } from "react-toastify"
import Services from "./components/services/Services"

export default function Home() {
  return (
    <>
      <div className="main-container">
        <ToastContainer />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Online Shopping for best Soccer Cleats - Next Store</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainLayout>
          <Hero />
          {/* <Slider />
          <LatestDesign />
          <Services />
          <FeaturedProducts />
          <Testimonials /> */}
        </MainLayout>
      </div>
    </>
  )
}
