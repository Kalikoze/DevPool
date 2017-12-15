import React, { Component } from 'react';
import '../styles/scss/Login.scss'

class Login extends Component {

  render() {
    return (
      <div className='login-screen'>
        <form className='login-form'>
          <div className='info-div'>
            <h2>Create Account</h2>
            <p>Already have an account? <a className='form-link' href='' target='_blank'>Sign In</a></p>
          </div>
          <input className='form-input username' type='text' placeholder='Enter Full Name'/>
          <input className='form-input email' type='email' placeholder='your.email@email.com'/>
          <input className='form-input password' type='password'/>
          <input className='form-input confirm-password' type='password'/>
          <button className='section-btn login-btn' type='submit'>Create Account</button>
        </form>
      </div>
    )
  }
}

export default Login;
