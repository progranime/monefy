import React from 'react'

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  Banner
} from '../../components/UI'

const Profile = () => {
  const submitHandler = e => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <>
      <Banner title='Profile' />

      <Card title='Update Profile'>
        <Form className='form form--profile' onSubmit={submitHandler}>
          <FormGroup>
            <Label htmlFor='firstName'>First Name</Label>
            <Input
              type='text'
              name='firstName'
              id='firstName'
              className='form-control'
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor='lastName'>Last Name</Label>
            <Input
              type='text'
              name='lastName'
              id='lastName'
              className='form-control'
            />
          </FormGroup>

          <div className='text-right'>
            <Button type='submit' className='btn btn-primary'>
              Update Profile
            </Button>
          </div>
        </Form>
      </Card>
    </>
  )
}

export default Profile
