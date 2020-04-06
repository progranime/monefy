import React from 'react'

import './index.scss'

const Button = (props) => {
    return (
        <button
            type={props.type}
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
    className: '',
    disabled: false,
}

export default Button
