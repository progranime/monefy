import React from 'react'

import './index.scss'

const ImageUpload = props => {
  return (
    <div className='image-upload'>
      <div className='image-upload__container'>
        <div
          className='image-upload__preview'
          style={{
            backgroundImage: `${
              props.previewUrl
                ? `url(${props.previewUrl})`
                : `url('https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png')`
            }`
          }}
        ></div>
      </div>
      <input
        type='file'
        name={props.name}
        id={props.id}
        accept='image/jpg,image/png,image/jpeg'
        onChange={props.imageHandler}
      />
    </div>
  )
}

export default ImageUpload
