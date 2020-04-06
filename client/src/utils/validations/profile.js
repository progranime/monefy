import { REQUIRED, REQUIRED_IMAGE } from '../validations'

export const profileValidation = (values) => {
    let errors = {}

    if (REQUIRED(values.firstName)) errors.firstName = 'First Name is required'
    if (REQUIRED(values.lastName)) errors.lastName = 'Last Name is required'

    if (values.profilePicture === null)
        errors.profilePicture = 'Profile Picture is required'

    return errors
}
