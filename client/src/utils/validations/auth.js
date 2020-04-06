export const loginValidation = (values) => {
    let errors = {}

    if (values.email.length === 0) errors.email = 'Email is required'

    if (values.password.length === 0) errors.password = 'Password is required'

    return errors
}
