import { useState, useEffect } from 'react'

export const useForm = (initialState, validate) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0
            if (noErrors) {
                setIsValid(true)
            } else {
                setIsValid(false)
            }
            setIsSubmitting(false)
        }
    }, [errors, isSubmitting])

    const changeHandler = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const blurHandler = () => {
        const validationErrors = validate(values)
        setErrors(validationErrors)
        setIsSubmitting(true)
    }

    const submitHandler = (callback, e) => {
        e.preventDefault()
        const validationErrors = validate(values)
        setErrors(validationErrors)
        setIsSubmitting(true)

        if (isValid) {
            callback()
        }
    }

    return {
        values,
        setValues,
        changeHandler,
        blurHandler,
        submitHandler,
        errors,
        isValid,
    }
}
