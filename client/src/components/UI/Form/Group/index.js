import React from 'react'

const FormGroup = (props) => {
    return (
        <div className={`form-group ${props.className}`}>{props.children}</div>
    )
}

FormGroup.defaultProps = {
    className: '',
    children: null
}
export default FormGroup
