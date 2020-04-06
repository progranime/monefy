import { REQUIRED, VALID_EMAIL, MIN_LENGTH } from '../validations'

export const loginValidation = (values) => {
    let errors = {}

    if (REQUIRED(values.email)) errors.email = 'Email is required'
    else if (!VALID_EMAIL(values.email)) errors.email = 'Invalid email'

    if (REQUIRED(values.password)) errors.password = 'Password is required'
    else if (!MIN_LENGTH(values.password, 5))
        errors.password = 'Minimum value is 5'

    return errors
}
