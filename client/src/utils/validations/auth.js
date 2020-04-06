import { REQUIRED, VALID_EMAIL, MIN_LENGTH, IS_EQUAL } from '../validations'

export const loginValidation = (values) => {
    let errors = {}

    if (REQUIRED(values.email)) errors.email = 'Email is required'
    else if (!VALID_EMAIL(values.email)) errors.email = 'Invalid email'

    if (REQUIRED(values.password)) errors.password = 'Password is required'

    return errors
}

export const registerValidation = (values) => {
    let errors = {}

    if (REQUIRED(values.firstName)) errors.firstName = 'First Name is required'
    if (REQUIRED(values.lastName)) errors.lastName = 'Last Name is required'

    if (REQUIRED(values.email)) errors.email = 'Email is required'
    else if (!VALID_EMAIL(values.email)) errors.email = 'Invalid email'

    if (REQUIRED(values.password)) errors.password = 'Password is required'
    else if (!MIN_LENGTH(values.password, 5))
        errors.password = 'Minimum value is 5'

    if (!IS_EQUAL(values.password, values.confirmPassword))
        errors.confirmPassword = 'Not the same password'

    return errors
}
