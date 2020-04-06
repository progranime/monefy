import React from 'react'

const Select = (props) => {
    return (
        <select
            className={props.className}
            id={props.id}
            name={props.name}
            onBlur={props.onBlur}
            onChange={props.onChange}
            value={props.value}
        >
            {props.children}
        </select>
    )
}

Select.defaultProps = {
    className: 'form-control'
}

export default Select
