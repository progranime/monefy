import React from 'react'

import './index.scss'

const Banner = props => {
  return (
    <div className='banner'>
      <div className='banner__container'>
        {props.title && (
          <div className='banner__header'>
            <p>{props.title}</p>
          </div>
        )}
        <div
          className='banner__image-holder'
          style={{
            backgroundImage: `url(${props.bannerImage})`
          }}
        ></div>
      </div>
      <div className='banner__overlay'></div>
    </div>
  )
}

Banner.defaultProps = {
  title: 'Page Name',
  bannerImage:
    'https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}

export default Banner
