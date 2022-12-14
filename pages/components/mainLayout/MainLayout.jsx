import Footer from "../footer/Footer"
import Header from "../header/Header"
import InfoBanner from "../infoBanner/InfoBanner"
import Navigation from "../navbar/Nav"
import { MainLayoutStyles } from "./mainLayoutStyles"

const MainLayout = ({ children }) => {
  return (
    <MainLayoutStyles>
      <InfoBanner />
      <Navigation style={{ position: "sticky", top: "0" }} />
      {children}
      <Footer />
    </MainLayoutStyles>
  )
}

export default MainLayout
