import React from 'react'

import './index.scss'

const Form = props => {
  return (
    <form
      className={props.className}
      onSubmit={props.onSubmit}
      method={props.method}
    >
      {props.children}
    </form>
  )
}

Form.defaultProps = {
  className: '',
  method: 'post'
}

export default Form
