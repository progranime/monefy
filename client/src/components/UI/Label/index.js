import React from 'react'

const Label = props => {
  return (
    <label htmlFor={props.htmlFor} className={`form-label ${props.className}`}>
      {props.children}
    </label>
  )
}

Label.defaultProps = {
  htmlFor: '',
  className: '',
  children: null
}

export default Label
