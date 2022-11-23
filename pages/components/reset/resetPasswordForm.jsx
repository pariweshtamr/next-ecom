import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { auth } from "../../../firebase/firebase-config"
import { ResetPasswordFormStyles } from "./resetPasswordFormStyles"
import { sendPasswordResetEmail } from "firebase/auth"
import { toast } from "react-toastify"
import Loader from "../loader/Loader"

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const resetPassword = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false)
        toast.success("Check your email for a reset link.")
      })
      .catch((error) => {
        setIsLoading(false)
        let message
        if (error.message.includes("auth/user-not-found")) {
          message = "User not found!"
        }
        toast.error(message)
      })
  }
  return (
    <ResetPasswordFormStyles>
      {isLoading && <Loader />}
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
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="reset-btn" type="submit">
            Reset Password
          </button>

          <div className="action-btns">
            <span>
              <Link href="/login"> - Login</Link>
            </span>
            <span>
              <Link href="/register"> - Register</Link>
            </span>
          </div>
        </form>
      </div>
    </ResetPasswordFormStyles>
  )
}

export default ResetPasswordForm
