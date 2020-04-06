import React from 'react'

const FormError = (props) => {
    return (
        <div className='form__error'>
            <p>{props.message}</p>
        </div>
    )
}

export default FormError
