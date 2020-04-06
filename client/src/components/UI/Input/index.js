import React from 'react'

const Input = React.forwardRef((props, ref) => {
    return (
        <input
            type={props.type}
            id={props.id}
            name={props.name}
            className={props.className}
            onBlur={props.onBlur}
            onChange={props.onChange}
            value={props.value}
        />
    )
})

Input.defaultProps = {
    type: 'text',
    id: '',
    name: '',
    className: '',
    onChange: null,
}

export default Input
