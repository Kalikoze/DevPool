import React from 'react';
import '../styles/scss/Button.scss'

const Button = ({text}) => {

  return (
    <button className='button' onClick={(e) => e.preventDefault()}>
      { text }
    </button>
  )

};

export default Button;
