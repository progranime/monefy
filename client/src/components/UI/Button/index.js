import React from 'react'

import './index.scss'

const Button = props => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  className: '',
  children: null,
  onClick: null
}

export default Button
