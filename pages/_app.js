import "../styles/globals.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Provider } from "react-redux"
import store from "../redux/store"
import "bootstrap/dist/css/bootstrap.min.css" // Import bootstrap CSS
import "../styles/globals.css"
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])
  return (
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
