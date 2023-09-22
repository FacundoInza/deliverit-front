import Image from 'next/image';
import React from 'react';
import logo from '@/assets/deliverit-full.png';
import MainButton from '@/components/commons/buttons/MainButton';
import { Navbar } from '@/components/ui/navbar';
import Link from 'next/link';
const page = () => {
    return (
        <>
            <nav>
                <Navbar isAuthenticated={false} />
            </nav>
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
                    <div className='mt-24'>
                        <Link href={'/auth'}>
                            <MainButton text='Sing in' btnGreen />
                        </Link>
                        <Link href={'/auth/signup'}>
                            <div className='mt-4'>
                                <MainButton text='Register' btnGreen />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
