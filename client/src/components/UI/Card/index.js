import React from 'react'

import './index.scss'

const Card = props => {
  return (
    <div className='card'>
      {props.title && (
        <div className='card__header'>
          <p>{props.title}</p>
        </div>
      )}
      <div className='card__body'>{props.children}</div>
      {props.footer && (
        <div className='card__footer'>
          <p>{props.footer}</p>
        </div>
      )}
    </div>
  )
}

Card.defaultProps = {
  title: '',
  footer: ''
}

export default Card
