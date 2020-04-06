import React from 'react'
import { Link } from 'react-router-dom'

import { useForm } from '../../../hooks/useForm'
import { registerValidation } from '../../../utils/validations/auth'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormError
} from '../../../components/UI'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Register = () => {
    const {
        values,
        changeHandler,
        blurHandler,
        submitHandler,
        errors
    } = useForm(initialState, registerValidation)

    const onSubmit = () => {
        const { firstName, lastName, email, password } = values
        let data = {
            firstName,
            lastName,
            email,
            password
        }

        console.log(data)
        console.log('Register!')
    }

    return (
        <Form
            className='form form--register'
            onSubmit={submitHandler.bind(this, onSubmit)}
        >
            <img
                src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                alt=''
                className='form__logo'
            />
            <FormGroup>
                <Label htmlFor='firstName'>First Name</Label>
                <Input
                    type='text'
                    name='firstName'
                    id='firstName'
                    className={`form-control ${
                        errors.firstName ? 'form__invalid' : ''
                    }`}
                    onBlur={blurHandler}
                    onChange={changeHandler}
                    value={values.firstName}
                ></Input>
                {errors.firstName && <FormError message={errors.firstName} />}
            </FormGroup>

            <FormGroup>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input
                    type='text'
                    name='lastName'
                    id='lastName'
                    className={`form-control ${
                        errors.lastName ? 'form__invalid' : ''
                    }`}
                    onBlur={blurHandler}
                    onChange={changeHandler}
                    value={values.lastName}
                ></Input>
                {errors.lastName && <FormError message={errors.lastName} />}
            </FormGroup>

            <FormGroup>
                <Label htmlFor='email'>Email</Label>
                <Input
                    type='email'
                    name='email'
                    id='email'
                    className={`form-control ${
                        errors.email ? 'form__invalid' : ''
                    }`}
                    onBlur={blurHandler}
                    onChange={changeHandler}
                    value={values.email}
                ></Input>
                {errors.email && <FormError message={errors.email} />}
            </FormGroup>

            <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <Input
                    type='password'
                    name='password'
                    id='password'
                    className={`form-control ${
                        errors.password ? 'form__invalid' : ''
                    }`}
                    onBlur={blurHandler}
                    onChange={changeHandler}
                    value={values.password}
                ></Input>
                {errors.password && <FormError message={errors.password} />}
            </FormGroup>

            <FormGroup>
                <Label htmlFor='confirmPassword'>Confirm Password</Label>
                <Input
                    type='password'
                    name='confirmPassword'
                    id='confirmPassword'
                    className={`form-control ${
                        errors.confirmPassword ? 'form__invalid' : ''
                    }`}
                    onBlur={blurHandler}
                    onChange={changeHandler}
                    value={values.confirmPassword}
                ></Input>
                {errors.confirmPassword && (
                    <FormError message={errors.confirmPassword} />
                )}
            </FormGroup>

            <Button type='submit' className='btn btn-primary btn-block'>
                Register
            </Button>

            <p className='text-center py-2'>
                <span className='text-secondary'>Has account already? </span>
                <Link to='/auth/login'>Go to login</Link>
            </p>
        </Form>
    )
}

export default Register
