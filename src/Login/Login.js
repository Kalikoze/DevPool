import React, { Component } from 'react';
import '../styles/scss/Login.scss'

class Login extends Component {

  render() {
    return (
      <div className='login-screen'>
        <form className='login-form'>
          <h2>Create Account</h2>
          <p>Already have an account? <a href='' target='_blank'>Sign In</a></p>
          <input className='username' type='text' placeholder='Enter Full Name'/>
          <input className='email' type='email' placeholder='your.email@email.com'/>
          <input className='password' type='password'/>
          <input className='confirm-password' type='password'/>
          <input type='submit' value='Create Account'/>
        </form>
      </div>
    )
  }
}

export default Login;
