import { LoaderStyles } from "./loaderStyles"
import ReactDOM from "react-dom"

const Loader = () => {
  return ReactDOM.createPortal(
    <LoaderStyles>
      <div className="wrapper">
        <div className="loader">
          <img src="/img/loader.gif" alt="Loading..." />
        </div>
      </div>
    </LoaderStyles>,
    document.getElementById("loader")
  )
}

export default Loader
