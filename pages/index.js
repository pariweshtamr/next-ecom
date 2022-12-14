import Head from "next/head"
import Hero from "./components/hero/Hero"
import MainLayout from "./components/mainLayout/MainLayout"
import Testimonials from "./components/testimonials/Testimonials"
import { ToastContainer } from "react-toastify"
import Services from "./components/services/Services"
import Info from "./components/info/Info"
import BestSeller from "./components/best-sellers/BestSeller"
import NewStock from "./components/new-stock/NewStock"
import Subscribe from "./components/subscribe/Subscribe"

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
          <Info />
          <BestSeller />
          <NewStock />
          <Testimonials />
          <hr />
          <Subscribe />
        </MainLayout>
      </div>
    </>
  )
}
