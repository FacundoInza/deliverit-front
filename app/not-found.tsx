import Link from 'next/link';
import React from 'react';
import logo from '../assets/deliverit-full.png';
import Image from 'next/image';
import '../styles/globals.css';
import { Navbar } from '../components/ui/navbar';

export default function NotFound() {
    return (
        <>
            <div className='min-h-screen bg-primary'>
                <nav>
                    <Navbar isAuthenticated={true} />
                </nav>

                <div className='text-white text-4xl font-bold text-center mt-48'>
                    Page Not Found
                    <div className='text-2xl font-bold text-center mt-8 underline hover:text-secondary'>
                        <Link href='/dealer/home'>Return to homepage</Link>
                    </div>
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
                </div>
            </div>
        </>
    );
}
