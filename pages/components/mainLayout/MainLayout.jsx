import Footer from "../footer/Footer"
import Header from "../header/Header"
import { MainLayoutStyles } from "./mainLayoutStyles"

const MainLayout = ({ children }) => {
  return (
    <MainLayoutStyles>
      <Header />
      {children}
      <Footer />
    </MainLayoutStyles>
  )
}

export default MainLayout
