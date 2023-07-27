'use client';

import 'tailwindcss/tailwind.css';
import React, { useState, ReactNode } from 'react';

interface DropdownCardProps {
    title: string;
    subtitle: string;
    children: ReactNode;
}

export const DropdownCard: React.FC<DropdownCardProps> = ({
    title,
    subtitle,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='z-100 mt-4 lg:ml-80 lg:mr-80 ml-4 mr-4 mx-auto py-4 px-4 bg-white rounded-xl border-2 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
                <div className='text-center space-y-2 sm:text-left'>
                    <div className='space-y-0.5 flex justify-between'>
                        <p className='text-lg font-semibold text-primary'>
                            {title}{' '}
                        </p>

                        <button onClick={toggleIsOpen} className='py-0 px-3'>
                            <svg
                                className={`h-6 w-6 ${
                                    isOpen ? 'transform rotate-180' : ''
                                }`}
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M19 9l-7 7-7-7'
                                />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <p className='font-medium flex text-primary'>
                            {subtitle}{' '}
                        </p>
                    </div>

                    {isOpen && (
                        <div>
                            <ul>{children}</ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
