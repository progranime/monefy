import React from 'react'

import { useInput } from '../../hooks/useInput'
import { useImage } from '../../hooks/useImage'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  Banner,
  ImageUpload,
  Select
} from '../../components/UI'

const Profile = () => {
  const { value: firstName, bind: bindFirstName } = useInput('')
  const { value: lastName, bind: bindLastName } = useInput('')
  const { imageHandler, previewUrl, file } = useImage()
  const { value: gender, bind: bindGender } = useInput('')

  const submitHandler = e => {
    e.preventDefault()

    let data = {
      firstName,
      lastName,
      file,
      gender
    }

    console.log(data)
  }

  return (
    <>
      <Banner title='Profile' />

      <Card title='Update Profile'>
        <Form className='form form--profile' onSubmit={submitHandler}>
          <div className='row'>
            <div className='col col-sm-4'>
              <FormGroup>
                <ImageUpload
                  id='profilePicture'
                  name='profilePicture'
                  imageHandler={imageHandler}
                  previewUrl={previewUrl}
                />
              </FormGroup>
            </div>
            <div className='col col-sm-8'>
              <FormGroup>
                <Label htmlFor='firstName'>First Name</Label>
                <Input
                  type='text'
                  name='firstName'
                  id='firstName'
                  className='form-control'
                  {...bindFirstName}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input
                  type='text'
                  name='lastName'
                  id='lastName'
                  className='form-control'
                  {...bindLastName}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor='gender'>Gender</Label>
                <Select
                  className='form-control'
                  id='gender'
                  name='gender'
                  {...bindGender}
                >
                  <option disabled>Please choose your gender</option>
                  <option value='1'>Male</option>
                  <option value='2'>Female</option>
                </Select>
              </FormGroup>
            </div>
          </div>

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
