'use client';

import 'tailwindcss/tailwind.css';
import React, { ReactNode } from 'react';

interface GeneralCardProps {
    title: string;
    children: ReactNode;
}

export const GeneralCard: React.FC<GeneralCardProps> = ({
    title,
    children,
}) => {
    return (
        <>
            <div className='mt-6 ml-4 mr-4 lg:ml-80 lg:mr-80 bg-white rounded-xl relative'>
                <div className='bg-info py-4 px-4 rounded-t-xl h-20 flex items-center'>
                    <button className='absolute'>
                        <svg
                            className='h-14 w-12 mr-2'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='#3D1DF3'
                        >
                            <circle cx='12' cy='12' r='10' strokeWidth='3' />
                            <path
                                d='M12 8l-4 4m0 0l4 4m-4-4h10'
                                strokeWidth='2'
                            />
                        </svg>
                    </button>

                    <p className='text-2xl font-semibold text-primary flex-grow text-center'>
                        {title}{' '}
                    </p>
                </div>

                <div className='px-4 py-6'>{children}</div>
            </div>
        </>
    );
};
