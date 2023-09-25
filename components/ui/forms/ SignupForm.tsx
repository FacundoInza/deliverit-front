'use client';

import React, { FC, useRef, useState } from 'react';
import MainButton from '../../commons/buttons/MainButton';
import { useForm } from 'react-hook-form';
import {
    RiUserLine,
    RiLockFill,
    RiEyeFill,
    RiEyeOffFill,
    RiFolderUserLine,
} from 'react-icons/ri';
import Link from 'next/link';
import { SignupFormDataToSend, SignupInputs } from '../../../interfaces';
import { ProfilePhotoEditor } from './ProfilePhotoEditor';
import dotenv from 'dotenv';
import axios, { AxiosError } from 'axios';
import Notification from '../modal/Notification';
import { useRouter } from 'next/navigation';

dotenv.config();

interface ErrorResponse {
    message: string;
}

async function signUp(values: SignupFormDataToSend) {
    const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/signup`;

    try {
        const response = await axios.post(apiURL, values);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError && axiosError.response) {
            throw new Error(axiosError.response.data.message);
        } else {
            throw new Error('An error occurred while signing up');
        }
    }
}

export const SignupForm: FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignupInputs>({ mode: 'onBlur' });

    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isModalSuccess, setIsModalSuccess] = useState(true);

    const router = useRouter();

    const onSubmit = async (data: SignupInputs) => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { repeatPassword, ...rest } = data;
            const dataToSend: SignupFormDataToSend = {
                ...rest,
                picture: profileImage,
            };
            const response = await signUp(dataToSend);
            setModalMessage(response);
            setIsModalSuccess(true);
            setShowModal(true);
        } catch (error) {
            setModalMessage((error as Error).message);
            setIsModalSuccess(false);
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        if (isModalSuccess) {
            router.push('/auth');
        } else {
            router.push('/auth/signup');
        }
    };

    const password = useRef({});
    password.current = watch('password', '');

    return (
        <>
            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                <div className=' sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form
                        className='space-y-4'
                        action='#'
                        method='POST'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className='flex justify-center'>
                            <ProfilePhotoEditor
                                defaultImageSrc='https://cdn-icons-png.flaticon.com/512/5249/5249427.png'
                                alt='profile-picture'
                                diameter={120}
                                onImageChange={setProfileImage}
                            />
                        </div>

                        <div>
                            <div className='relative mt-2'>
                                <input
                                    placeholder='Your name'
                                    id='name'
                                    type='text'
                                    autoComplete='name'
                                    {...register('name', {
                                        required: 'Name is required',
                                    })}
                                    className='block w-full rounded-lg border-1 px-12 py-3.5 text-primary shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-white focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6 bg-transparent'
                                />
                                <span className='absolute left-3 top-1/2 transform -translate-y-6 text-gray-400'>
                                    <RiFolderUserLine size={25} />
                                </span>
                                <div style={{ height: '20px' }}>
                                    {errors.name && (
                                        <p className='text-red-400 text-right pe-2 text-sm'>
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='relative mt-2'>
                                <input
                                    placeholder='Your last name'
                                    id='lastName'
                                    type='text'
                                    autoComplete='lastName'
                                    {...register('lastName', {
                                        required: 'Lastname is required',
                                    })}
                                    className='block w-full rounded-lg border-1 px-12 py-3.5 text-primary shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-white focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6 bg-transparent'
                                />
                                <span className='absolute left-3 top-1/2 transform -translate-y-6 text-gray-400'>
                                    <RiFolderUserLine size={25} />
                                </span>
                                <div style={{ height: '20px' }}>
                                    {errors.lastName && (
                                        <p className='text-red-400 text-right pe-2 text-sm'>
                                            {errors.lastName.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='relative mt-2'>
                                <input
                                    placeholder='your@email.com'
                                    id='email'
                                    type='email'
                                    autoComplete='email'
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                    className='block w-full rounded-lg border-1 px-12 py-3.5 text-primary shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-white focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6 bg-transparent'
                                />
                                <span className='absolute left-3 top-1/2 transform -translate-y-6 text-gray-400'>
                                    <RiUserLine size={25} />
                                </span>
                                <div style={{ height: '20px' }}>
                                    {errors.email && (
                                        <p className='text-red-400 text-right pe-2 text-sm'>
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='relative mt-2'>
                                <input
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Your Password'
                                    autoComplete='current-password'
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 8,
                                            message:
                                                'Password must be at least 8 characters',
                                        },
                                    })}
                                    className='block w-full rounded-lg border-1 px-12 py-3.5 text-primary shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-white focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6 bg-transparent'
                                />
                                <span className='absolute left-3 top-1/2 transform -translate-y-6 text-gray-400'>
                                    <RiLockFill size={25} />
                                </span>
                                <span
                                    className='absolute z-30 right-3 top-1/2 transform -translate-y-6 text-gray-400 cursor-pointer'
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? (
                                        <RiEyeOffFill size={25} />
                                    ) : (
                                        <RiEyeFill size={25} />
                                    )}
                                </span>
                                <div style={{ height: '20px' }}>
                                    {errors.password && (
                                        <p className='text-red-400 text-right pe-2 text-sm'>
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='relative mt-2'>
                                <input
                                    id='repeatPassword'
                                    type={
                                        showRepeatPassword ? 'text' : 'password'
                                    }
                                    placeholder='Your Password'
                                    autoComplete='current-password'
                                    {...register('repeatPassword', {
                                        required: 'Please confirm password.',
                                        minLength: {
                                            value: 8,
                                            message:
                                                'Password must be at least 8 characters',
                                        },
                                        validate: (value) =>
                                            value === password.current ||
                                            'Passwords do not match',
                                    })}
                                    className='block w-full rounded-lg border-1 px-12 py-3.5 text-primary shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-white focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6 bg-transparent'
                                />
                                <span className='absolute left-3 top-1/2 transform -translate-y-6 text-gray-400'>
                                    <RiLockFill size={25} />
                                </span>
                                <span
                                    className='absolute z-30 right-3 top-1/2 transform -translate-y-6 text-gray-400 cursor-pointer'
                                    onClick={() =>
                                        setShowRepeatPassword(
                                            !showRepeatPassword
                                        )
                                    }
                                >
                                    {showRepeatPassword ? (
                                        <RiEyeOffFill size={25} />
                                    ) : (
                                        <RiEyeFill size={25} />
                                    )}
                                </span>
                                <div style={{ height: '20px' }}>
                                    {errors.repeatPassword && (
                                        <p className='text-red-400 text-right pe-2 text-sm'>
                                            {errors.repeatPassword.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <div className='mt-20 '>
                                <MainButton text='Create Account' btnGreen />
                            </div>
                            <div>
                                <div className='flex items-center justify-center'>
                                    <div className='text-base'>
                                        <p className='font-normal text-primary'>
                                            Already have an account?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <Link href='/auth'>
                        <MainButton text='Sign In' btnBlue />
                    </Link>
                </div>
            </div>
            {showModal && (
                <Notification
                    showModal={showModal}
                    isSuccess={isModalSuccess}
                    message={modalMessage}
                    onClose={handleCloseModal}
                    buttonText={isModalSuccess ? 'Sign In' : 'Retry'}
                />
            )}
        </>
    );
};
