'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../../assets/deliverit-full.png';
import MainButton from '../../commons/buttons/MainButton';
import Link from 'next/link';
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
                            <div className='flex items-center justify-end mt-2'>
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
                        <div className='space-y-6'>
                            <div className='mt-20'>
                                <MainButton text='Sign In' btnGreen />
                            </div>
                            <div>
                                <Link href='/signup'>
                                    <MainButton text='Create Account' btnBlue />
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
