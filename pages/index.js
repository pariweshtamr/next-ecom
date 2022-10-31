import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Slider from "./components/slider/Slider"
import TryFit from "./components/tryFit/tryFit"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next E-Commerce Store</title>
        <meta
          name="description"
          content="E-copmmerce store built with next js"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Slider />
      <TryFit />
    </div>
  )
}
