import Image from "next/image"
import { RegisterFormStyles } from "./registerFormStyles"

const RegisterForm = () => {
  return (
    <RegisterFormStyles>
      <div className="form-container">
        <div className="app-logo">
          <Image src="/img/logo.png" alt="logo" width="100" height="100" />
          <span>Please fill in the details to join us.</span>
        </div>

        <form>
          <div className="form-group">
            <div className="form-group-content">
              <label htmlFor="fName">First Name</label>
              <input id="fName" type="text" placeholder="John" />
            </div>
            <div className="form-group-content">
              <label htmlFor="lName">Last Name</label>
              <input id="lName" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="form-group-content">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="user@example.com" />
          </div>

          <div className="form-group-content">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter you password"
            />
          </div>
          <div className="form-group-content">
            <label htmlFor="cPassword">Confirm Password</label>
            <input
              id="cPassword"
              type="password"
              placeholder="Enter you password"
            />
          </div>

          <span className="form-text">
            By Continuing, I agree to Next Store's <span>Privacy Poicy</span>{" "}
            and <span>Terms of Use.</span>
          </span>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </RegisterFormStyles>
  )
}

export default RegisterForm
