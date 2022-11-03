import { LoginFormStyles } from "./loginFormStyles"
import Image from "next/image"

const LoginForm = () => {
  return (
    <LoginFormStyles>
      <div className="form-container">
        <div className="app-logo">
          <Image src="/img/logo.png" alt="logo" width="100" height="100" />
          <span>Enter your credentials to sign in.</span>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="user@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
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
    </LoginFormStyles>
  )
}

export default LoginForm
