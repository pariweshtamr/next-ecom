import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ResetPasswordFormStyles } from "./resetPasswordFormStyles"

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("")
  const resetPassword = () => {}
  return (
    <ResetPasswordFormStyles>
      <div className="reset">
        <Image
          className="reset-img"
          src="/img/forgot.png"
          width="1000"
          height="1000"
          alt="forgot"
        ></Image>

        <form onSubmit={resetPassword}>
          <div className="form-title">
            <h3>Reset Password</h3>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="user@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="reset-btn">Reset Password</button>

          <div className="action-btns">
            <span>
              <Link href="/login">Login</Link>
            </span>
            <span>
              <Link href="/register">Register</Link>
            </span>
          </div>
        </form>
      </div>
    </ResetPasswordFormStyles>
  )
}

export default ResetPasswordForm
