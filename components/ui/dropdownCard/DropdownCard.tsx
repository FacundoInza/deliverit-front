'use client';

import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';

export const DropdownCard = () => {
    const [pendingDeliveriesIsOpen, setPendingDeliveriesIsOpen] =
        useState(false);
    const [deliveriesHistoryIsOpen, setDeliveriesHistoryIsOpen] =
        useState(false);

    const toggleDropdownPendingDeliveries = () => {
        setPendingDeliveriesIsOpen(!pendingDeliveriesIsOpen);
    };

    const toggleDropdownDeliveriesHistory = () => {
        setDeliveriesHistoryIsOpen(!deliveriesHistoryIsOpen);
    };

    return (
        <>
            <div className='z-100 bg- mt-4 py-4 px-4 max-w-sm mx-auto bg-white rounded-xl border-2 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
                <div className='text-center space-y-2 sm:text-left'>
                    <div className='space-y-0.5 flex justify-between'>
                        <p className='text-lg font-semibold text-primary'>
                            Pending deliveries
                        </p>
                        <button
                            onClick={toggleDropdownPendingDeliveries}
                            className='py-0 px-3'
                        >
                            <svg
                                className={`h-6 w-6 ${
                                    pendingDeliveriesIsOpen
                                        ? 'transform rotate-180'
                                        : ''
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
                    <p className='font-medium flex text-primary'>
                        5 pending packages
                    </p>

                    {pendingDeliveriesIsOpen && (
                        <div>
                            <ul>
                                <li className='flex'>shipment 6</li>
                                <li className='flex'>shipment 7</li>
                                <li className='flex'>shipment 8</li>
                                <li className='flex'>shipment 9</li>
                                <li className='flex'>shipment 10</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className='mt-4 py-4 px-4 max-w-sm mx-auto bg-white rounded-xl border-2 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
                <div className='text-center space-y-2 sm:text-left'>
                    <div className='space-y-0.5 flex justify-between'>
                        <p className='text-lg font-semibold text-primary'>
                            Delivery history
                        </p>
                        <button
                            onClick={toggleDropdownDeliveriesHistory}
                            className='py-0 px-3'
                        >
                            <svg
                                className={`h-6 w-6 ${
                                    deliveriesHistoryIsOpen
                                        ? 'transform rotate-180'
                                        : ''
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

                    <p className='text-primary font-medium flex'>
                        5 delivered packages
                    </p>

                    {deliveriesHistoryIsOpen && (
                        <div>
                            <ul>
                                <li className='flex'>shipment 1</li>
                                <li className='flex'>shipment 2</li>
                                <li className='flex'>shipment 3</li>
                                <li className='flex'>shipment 4</li>
                                <li className='flex'>shipment 5</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
