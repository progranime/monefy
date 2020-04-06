import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import {
    Button,
    Input,
    Label,
    Form,
    FormGroup,
    FormError
} from '../../../components/UI'
import { useForm } from '../../../hooks/useForm'
import { AuthContext } from '../../../context/auth'
import { loginValidation } from '../../../utils/validations/auth'

const initialState = {
    email: '',
    password: ''
}

const Login = () => {
    const auth = useContext(AuthContext)
    const {
        values,
        changeHandler,
        blurHandler,
        submitHandler,
        errors
    } = useForm(initialState, loginValidation)

    const onSubmit = () => {
        auth.login()
    }
    return (
        <Form
            className='form form--login'
            onSubmit={submitHandler.bind(this, onSubmit)}
        >
            <img
                src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                alt=''
                className='form__logo'
            />
            <FormGroup className='form-group'>
                <Label htmlFor='email'>Email</Label>
                <Input
                    type='text'
                    className={`form-control ${
                        errors.email ? 'form__invalid' : ''
                    }`}
                    id='email'
                    name='email'
                    onBlur={blurHandler}
                    onChange={changeHandler}
                    value={values.email}
                />
                {errors.email && <FormError message={errors.email} />}
            </FormGroup>
            <FormGroup className='form-group'>
                <Label htmlFor='password'>Password</Label>
                <Input
                    type='password'
                    className={`form-control ${
                        errors.password ? 'form__invalid' : ''
                    }`}
                    id='password'
                    name='password'
                    onBlur={blurHandler}
                    onChange={changeHandler}
                    value={values.password}
                />
                {errors.password && <FormError message={errors.password} />}
            </FormGroup>
            <Button type='submit' className='btn btn-primary btn-block'>
                Login
            </Button>

            <p className='text-center pt-2'>
                <span className='text-secondary'>Not register? </span>
                <Link to='/auth/register'>Create an account</Link>
            </p>
        </Form>
    )
}

export default Login
