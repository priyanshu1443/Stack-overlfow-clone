import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./auth.css"
import icon from '../../assets/icon.png'
import Aboutauth from './Aboutauth'
import { signup, login } from '../../actions/auth'
import Navbar from '../../components/navbar/Navbar'

function Auth() {
  const [isSignup, setIsSignup] = useState(false)
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault()
    if (!email && !password) {
      alert("Enter email and password")
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue")
      }
      dispatch(signup({ name, email, password }, navigate))

    } else {
      dispatch(login({ email, password }, navigate))
    }
  }
  const handleSwitch = () => setIsSignup(!isSignup)
  return (
    <>
      <Navbar />
      <section className="auth-section">
        {isSignup && <Aboutauth />}
        <div className='auth-container-2'>
          {!isSignup && <img className='login-logo' src={icon} alt="Stack overflow" />}
          <form onSubmit={handlesubmit}>
            {
              isSignup && (
                <label htmlFor="name">
                  <h4>Display name</h4>
                  <input type="text" name='name' id='name' onChange={(e) => setname(e.target.value)} />
                </label>
              )
            }
            <label htmlFor="email">
              <h4>Email</h4>
              <input type="email" name='email' id='email' onChange={(e) => setemail(e.target.value)} />
            </label>
            <label htmlFor="password">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Password</h4>
                {!isSignup && <p style={{ fontSize: "13px", color: "#007ac6" }}>Forgot password</p>}
              </div>
              <input type="password" name='password' id='password' onChange={(e) => setpassword(e.target.value)} />
              {isSignup && <p></p>}
            </label>
            <button type="submit" className='auth-btn'>
              {isSignup ? "Sign up" : "Log in"}
            </button>
          </form>
          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <button type="button" className='handle-switch-btn' onClick={handleSwitch}>
              {isSignup ? "Login" : "Sign up"}
            </button>
          </p>
        </div>
      </section>
    </>
  )
}

export default Auth
