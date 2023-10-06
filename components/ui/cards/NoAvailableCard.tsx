'use client';

import React from 'react';
import MainButton from '@/components/commons/buttons/MainButton';

const NoAvailableCard = () => {
    return (
        <div>
            <div className='text-center text-red-500'>
                You are not enabled to receive packages
            </div>
            <div className='text-center text-red-500'>
                Complete the form to enable yourself to receive packages or wait
                24 hours for the administrator to enable you
            </div>
            <div className='flex justify-center mt-4 w-72 m-auto'>
                <MainButton
                    btnGreen
                    text='Complete Form'
                    redirect='/dealer/sworn-statement'
                />
            </div>
        </div>
    );
};

export default NoAvailableCard;
