import React from 'react'
import './css/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='Your name'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already Have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree"> 
          <input type="checkbox" />
          <p>By continuing ,i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
