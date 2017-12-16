import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import App from '../App/App';
import '../styles/scss/Login.scss'

class Login extends Component {
  constructor() {
    super();

  }

  closeWindow() {
    <Route exact path='/' render={() => {
      return (
          <App />
      )
    }} />
    console.log('sup')
  }

  render() {
    return (
      <div className='login-screen'>
        <form className='login-form'>
          <div className='div-icon' onClick={() => this.closeWindow()}>
            <svg className='exit-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 543.987 543.987">
            <path d="M85.265 74.203C-23.952 177.311-28.901 349.431 74.207 458.647a248.962 248.962 0 0 0 5.526 5.684c106.203 106.209 278.398 106.209 384.596 0 106.209-106.198 106.209-278.393 0-384.596C360.297-24.391 192.3-26.844 85.265 74.203zm52.166 117.065l53.841-53.841 80.765 80.765 80.765-80.765 53.847 53.841-80.765 80.792 80.77 80.737-53.847 53.847-80.765-80.77-80.765 80.77-53.841-53.847 80.759-80.737-80.764-80.792z" fill="#209EDB"/>
            </svg>
          </div>
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
