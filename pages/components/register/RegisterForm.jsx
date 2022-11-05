import Image from "next/image"
import { useState } from "react"
import { RegisterFormStyles } from "./registerFormStyles"
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../../firebase/firebase-config"
import Loader from "../loader/Loader"

const RegisterForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const registerUser = (e) => {
    e.preventDefault()

    if (password !== cPassword) {
      return toast.error("Password and Confirm Password do not match!")
    }
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        setIsLoading(false)
        updateProfile(user, {
          displayName: fName,
        })
        toast.success("Registration Successful...")
        console.log(user)
      })
      .catch((error) => {
        let message
        if (error.message.includes("auth/email-already-in-use")) {
          message = "User already exists!"
        }
        toast.error(message)
        setIsLoading(false)
      })
  }
  return (
    <RegisterFormStyles>
      {isLoading && <Loader />}
      <div className="form-container">
        <div className="app-logo">
          <Image src="/img/logo.png" alt="logo" width="100" height="100" />
          <span>Please fill in the details to join us.</span>
        </div>

        <form onSubmit={registerUser}>
          <div className="form-group">
            <div className="form-group-content">
              <label htmlFor="fName">First Name</label>
              <input
                id="fName"
                type="text"
                placeholder="John"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className="form-group-content">
              <label htmlFor="lName">Last Name</label>
              <input
                id="lName"
                type="text"
                placeholder="Doe"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group-content">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group-content">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Enter you password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group-content">
            <label htmlFor="cPassword">Confirm Password</label>
            <input
              id="cPassword"
              type="password"
              placeholder="Enter you password"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>

          <span className="form-text">
            By Continuing, I agree to Next Store's <span>Privacy Poicy</span>{" "}
            and <span>Terms of Use.</span>
          </span>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </RegisterFormStyles>
  )
}

export default RegisterForm
