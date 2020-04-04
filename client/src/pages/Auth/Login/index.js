import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Button, Input, Label, Form, FormGroup } from '../../../components/UI'
import { useInput } from '../../../hooks/useInput'
import { AuthContext } from '../../../context/auth'

const Login = () => {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('')
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword
  } = useInput('')

  const auth = useContext(AuthContext)

  const submitHandler = e => {
    e.preventDefault()
    console.log('Values: ', email, password)

    auth.login()
    resetEmail('')
    resetPassword('')
  }

  return (
    <Form className='form form--login' onSubmit={submitHandler}>
      <img
        src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
        alt=''
        className='form__logo'
      />
      <FormGroup className='form-group'>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='text'
          className='form-control'
          id='email'
          name='email'
          {...bindEmail}
        />
      </FormGroup>
      <FormGroup className='form-group'>
        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          className='form-control'
          id='password'
          name='password'
          {...bindPassword}
        />
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
