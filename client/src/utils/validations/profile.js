import { REQUIRED } from '../validations'

export const profileValidation = (values) => {
    let errors = {}

    console.log(values)

    if (REQUIRED(values.firstName)) errors.firstName = 'First Name is required'
    if (REQUIRED(values.lastName)) errors.lastName = 'Last Name is required'

    return errors
}
