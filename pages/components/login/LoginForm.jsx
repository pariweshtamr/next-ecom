import { LoginFormStyles } from "./loginFormStyles"
import Image from "next/image"
import { useState } from "react"
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"
import { auth } from "../../../firebase/firebase-config"
import { toast } from "react-toastify"
import Loader from "../loader/Loader"
import { useRouter } from "next/router"
import Link from "next/link"
import { FaGoogle } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { loginSuccess } from "../../../redux/slice/authSlice"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const router = useRouter()

  const loginUser = (e) => {
    e.preventDefault()

    if (!email && !password) return

    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user

        user &&
          dispatch(
            loginSuccess({
              email: user.email,
              username: user.displayName,
              userId: user.uid,
            })
          )
        user.uid && router.push("/")
        setIsLoading(false)
      })
      .catch((error) => {
        toast.error(error.message)
        setIsLoading(false)
      })
  }

  // Login with google
  const provider = new GoogleAuthProvider()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        if (user.uid) {
          toast.success("Login Successful")
          router.push("/")
        }
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }
  return (
    <LoginFormStyles>
      {isLoading && <Loader />}
      <div className="login">
        <div className="form-container">
          <div className="app-logo">
            <Image src="/img/logo.png" alt="logo" width="100" height="100" />
            <span>Enter your credentials to sign in.</span>
          </div>

          <form onSubmit={loginUser}>
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

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter you password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <span>
              <Link href="/reset">Forgot password?</Link>
            </span>

            <span className="form-text">
              By Continuing, I agree to Next Store's <span>Privacy Poicy</span>{" "}
              and <span>Terms of Use.</span>
            </span>

            <button className="btn" type="submit">
              Sign In
            </button>
          </form>
        </div>

        <div className="or">-- OR --</div>

        <button className="google-btn" onClick={signInWithGoogle}>
          <FaGoogle /> <span>Sign in with Google</span>
        </button>

        <div className="reg-btn">
          Don't have an account?{" "}
          <span>
            <Link href="/register">Register</Link>
          </span>
        </div>
      </div>
    </LoginFormStyles>
  )
}

export default LoginForm
