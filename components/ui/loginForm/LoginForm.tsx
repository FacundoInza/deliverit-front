'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../../assets/deliverit-full.png';
import MainButton from '../../commons/buttons/MainButton';
import {
    RiUserLine,
    RiLockFill,
    RiEyeFill,
    RiEyeOffFill,
} from 'react-icons/ri';

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <Image
                        className='mx-auto h-30 w-auto'
                        width={900}
                        height={400}
                        src={logo}
                        alt='DeliverIT'
                        objectFit='cover'
                    />
                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-6' action='#' method='POST'>
                        <div>
                            <div className='relative mt-2'>
                                <input
                                    placeholder='your@email.com'
                                    id='email'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    required
                                    className='block w-full rounded-lg border-1 px-12 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6 bg-transparent'
                                />
                                <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
                                    <RiUserLine size={25} />
                                </span>
                            </div>
                        </div>

                        <div>
                            <div className='relative mt-2'>
                                <input
                                    id='password'
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='YourUltraSecretPassword'
                                    autoComplete='current-password'
                                    required
                                    className='block w-full rounded-lg border-1 px-12 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6 bg-transparent'
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
                            </div>
                            <div className='flex items-center justify-end'>
                                <div className='text-base'>
                                    <a
                                        href='#'
                                        className='font-semibold text-white hover:text-gray-300'
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <MainButton text='Sign In' btnGreen />
                            {/* <button
                                type='submit'
                                className='flex w-full justify-center rounded-full bg-secondary px-3 py-1.5 text-lg font-bold leading-6 text-primary shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300'
                            >
                                Sign in
                            </button> */}
                        </div>
                        <div>
                            <MainButton text='Create Account' btnBlue />
                            {/* <button className='flex w-full justify-center border border-secondary rounded-full bg-primary px-3 py-1.5 text-lg font-bold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'>
                                Create Account
                            </button> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
