import React from 'react'

import { useForm } from '../../hooks/useForm'
import {
    Form,
    FormGroup,
    FormError,
    Label,
    Input,
    Button,
    Card,
    Banner,
    ImageUpload,
    Select
} from '../../components/UI'
import { profileValidation } from '../../utils/validations/profile'

const initialState = {
    firstName: '',
    lastName: '',
    gender: '',
    profilePicture: null,
    profilePicturePreview: '',
    fileElement: ''
}

const Profile = () => {
    const {
        values,
        changeHandler,
        imageHandler,
        submitHandler,
        blurHandler,
        errors
    } = useForm(initialState, profileValidation)

    const onSubmit = () => {
        const {
            firstName,
            lastName,
            profilePicture,
            gender,
            profilePicturePreview
        } = values
        let data = {
            firstName,
            lastName,
            profilePicture,
            profilePicturePreview,
            gender
        }

        console.log(data)
        console.log('updated!')
    }

    return (
        <>
            <Banner title='Profile' />

            <Card title='Update Profile'>
                <Form
                    className='form form--profile'
                    onSubmit={submitHandler.bind(this, onSubmit)}
                >
                    <div className='row'>
                        <div className='col col-sm-4'>
                            <FormGroup>
                                <ImageUpload
                                    id='profilePicture'
                                    name='profilePicture'
                                    onBlur={blurHandler}
                                    imageHandler={imageHandler}
                                    previewUrl={values.profilePicturePreview}
                                />
                                {errors.profilePicture && (
                                    <FormError
                                        message={errors.profilePicture}
                                    />
                                )}
                            </FormGroup>
                        </div>
                        <div className='col col-sm-8'>
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
                                />
                                {errors.firstName && (
                                    <FormError message={errors.firstName} />
                                )}
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
                                />
                                {errors.lastName && (
                                    <FormError message={errors.lastName} />
                                )}
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor='gender'>Gender</Label>
                                <Select
                                    className={`form-control ${
                                        errors.gender ? 'form__invalid' : ''
                                    }`}
                                    id='gender'
                                    name='gender'
                                    onBlur={blurHandler}
                                    onChange={changeHandler}
                                    value={values.gender}
                                >
                                    <option disabled>
                                        Please choose your gender
                                    </option>
                                    <option value='1'>Male</option>
                                    <option value='2'>Female</option>
                                </Select>
                                {errors.gender && (
                                    <FormError message={errors.gender} />
                                )}
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
