import React from 'react'
import { Link } from 'react-router-dom'

import { useInput } from '../../../hooks/useInput'
import { Form, FormGroup, Label, Input, Button } from '../../../components/UI'

const Register = () => {
  const {
    value: firstName,
    bind: bindFirstName,
    reset: resetFirstName
  } = useInput('')
  const {
    value: lastName,
    bind: bindLastName,
    reset: resetLastName
  } = useInput('')
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('')
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword
  } = useInput('')
  const {
    value: confirmPassword,
    bind: bindConfirmPassword,
    reset: resetConfirmPassword
  } = useInput('')

  const submitHandler = e => {
    e.preventDefault()

    let data = {
      firstName,
      lastName,
      email,
      password
    }

    console.log(data)

    if (password === confirmPassword) {
      console.log('Register!')
      resetFirstName()
      resetLastName()
      resetEmail()
      resetPassword()
      resetConfirmPassword()
    }
  }

  return (
    <Form className='form form--register' onSubmit={submitHandler}>
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
          className='form-control'
          {...bindFirstName}
        ></Input>
      </FormGroup>

      <FormGroup>
        <Label htmlFor='lastName'>Last Name</Label>
        <Input
          type='text'
          name='lastName'
          id='lastName'
          className='form-control'
          {...bindLastName}
        ></Input>
      </FormGroup>

      <FormGroup>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          name='email'
          id='email'
          className='form-control'
          {...bindEmail}
        ></Input>
      </FormGroup>

      <FormGroup>
        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          name='password'
          id='password'
          className='form-control'
          {...bindPassword}
        ></Input>
      </FormGroup>

      <FormGroup>
        <Label htmlFor='confirmPassword'>Confirm Password</Label>
        <Input
          type='confirmPassword'
          name='confirmPassword'
          id='confirmPassword'
          className='form-control'
          {...bindConfirmPassword}
        ></Input>
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
