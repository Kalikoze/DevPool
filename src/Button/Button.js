import React from 'react';
import '../styles/scss/Button.scss'

const Button = ({ text, btnStyle }) => {

  return (
    <button className={ btnStyle } onClick={(e) => e.preventDefault()}>
      { text }
    </button>
  )

};

export default Button;
