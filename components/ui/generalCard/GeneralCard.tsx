'use client';

import 'tailwindcss/tailwind.css';
import React from 'react';

export const GeneralCard = () => {
    return (
        <>
            <div className='mt-4 max-w-sm mx-auto bg-white rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 relative'>
                <div className='bg-secondary py-4 px-4 text-white text-lg font-semibold rounded-t-xl absolute top-0 w-full'>
                    <button className='py-0 px-3 flex-shrink-0 absolute'>
                        <svg
                            className='h-6 w-6 mr-2'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='#3D1DF3'
                        >
                            <circle cx='12' cy='12' r='10' strokeWidth='2' />
                            <path d='M12 8l-4 4m0 0l4 4m-4-4h14' />
                        </svg>
                    </button>

                    <p className='text-lg font-semibold text-primary flex-grow text-center'>
                        Card Header
                    </p>
                </div>

                <div className='px-4 py-6 pt-16'>
                    <p className='text-gray-800 text-base'>TEST</p>
                    <p className='text-gray-800 text-base'>TEST</p>
                    <p className='text-gray-800 text-base'>TEST</p>
                    <p className='text-gray-800 text-base'>TEST</p>
                </div>
            </div>
        </>
    );
};
