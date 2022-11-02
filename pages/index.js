import Head from "next/head"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Products from "./components/products/Products"
import Slider from "./components/slider/Slider"
import Testimonials from "./components/testimonials/Testimonials"
import TryFit from "./components/tryFit/tryFit"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Online SHopping for best Soccer Cleats - Next Store</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Slider />
      <TryFit />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  )
}
