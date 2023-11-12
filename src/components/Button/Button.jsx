import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const style = ['btn--primary','btn--outline']
const size = ['btn--medium','btn--large']

function Button({buttonStyle, buttonSize, children, onClick, type}) {
    const checkButtonStyle = style.includes(buttonStyle) ? buttonStyle : style[0]
    const checkButtonSize = size.includes(buttonSize) ? buttonSize : size[0]

  return (
    <Link to='/about'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    </Link>
  )
}

export default Button