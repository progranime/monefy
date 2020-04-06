export const REQUIRED = (value) => {
    return value.length === 0
}

export const REQUIRED_IMAGE = (value) => {
    return value !== undefined
}

export const VALID_EMAIL = (value) => {
    // eslint-disable-next-line
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
    )
}

export const MIN_LENGTH = (value, min) => {
    return value.length > min
}

export const MAX_LENGTH = (value, max) => {
    return value.length < max
}

export const IS_EQUAL = (value, confirmValue) => {
    return value === confirmValue
}
