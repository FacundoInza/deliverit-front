'use client';

import React, { FC, useRef, useState } from 'react';
import MainButton from '../../commons/buttons/MainButton';
import { useForm } from 'react-hook-form';
import {
    RiUserLine,
    RiLockFill,
    RiEyeFill,
    RiEyeOffFill,
} from 'react-icons/ri';
import Link from 'next/link';

interface FormInputs {
    email: string;
    password: string;
    repeatPassword: string;
}

export const SignupForm: FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormInputs>();
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onSubmit = (data: FormInputs) => {
        console.log(data);
        setIsAuthenticated(true);
    };

    const password = useRef({});
    password.current = watch('password', '');

    return (
        <>
            {isAuthenticated && <div>User Authenticated</div>}
            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form
                        className='space-y-6'
                        action='#'
                        method='POST'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <div className='relative mt-2'>
                                <input
                                    placeholder='your@email.com'
                                    id='email'
                                    type='email'
                                    autoComplete='email'
                                    required
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                    className='block w-full rounded-lg border-1 px-12 py-3.5 text-primary shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6 bg-transparent'
                                />
                                <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
                                    <RiUserLine size={25} />
                                </span>
                                {errors.email && (
                                    <p className='text-red-400 text-right pe-2'>
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className='relative mt-2'>
                                <input
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='YourUltraSecretPassword'
                                    autoComplete='current-password'
                                    required
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 8,
                                            message:
                                                'Password must be at least 8 characters',
                                        },
                                    })}
                                    className='block w-full rounded-lg border-1 px-12 py-3.5 text-primary shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6 bg-transparent'
                                />
                                <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
                                    <RiLockFill size={25} />
                                </span>
                                <span
                                    className='absolute z-50 right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer'
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
                                {errors.password && (
                                    <p className='text-red-400 text-right pe-2'>
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className='relative mt-2'>
                                <input
                                    id='repeatPassword'
                                    type={
                                        showRepeatPassword ? 'text' : 'password'
                                    }
                                    placeholder='YourUltraSecretPassword'
                                    autoComplete='current-password'
                                    required
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
                                    className='block w-full rounded-lg border-1 px-12 py-3.5 text-primary shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6 bg-transparent'
                                />
                                <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
                                    <RiLockFill size={25} />
                                </span>
                                <span
                                    className='absolute z-50 right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer'
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
                                {errors.repeatPassword && (
                                    <p className='text-red-400 text-right pe-2'>
                                        {errors.repeatPassword.message}
                                    </p>
                                )}
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
                    <Link href='/'>
                        <MainButton text='Sign In' btnBlue />
                    </Link>
                </div>
            </div>
        </>
    );
};
