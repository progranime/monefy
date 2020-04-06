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

    useEffect(() => {
        if (!values.profilePicture) return

        const fileReader = new FileReader()
        fileReader.onload = (e) => {
            setValues({
                ...values,
                profilePicturePreview: fileReader.result
            })
        }
        fileReader.readAsDataURL(values.profilePicture)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values.profilePicture])

    const changeHandler = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const imageHandler = (e) => {
        if (e.target.files)
            setValues({
                ...values,
                [e.target.name]: e.target.files[0]
            })
    }

    const blurHandler = () => {
        if (validate !== undefined) {
            const validationErrors = validate(values)
            setErrors(validationErrors)
            setIsSubmitting(true)
        }
    }

    const submitHandler = (callback, e) => {
        e.preventDefault()
        if (validate !== undefined) {
            const validationErrors = validate(values)
            setErrors(validationErrors)
            setIsSubmitting(true)

            if (isValid) {
                callback()
            }
        } else {
            callback()
        }
    }

    return {
        values,
        setValues,
        changeHandler,
        imageHandler,
        blurHandler,
        submitHandler,
        errors,
        isValid
    }
}
