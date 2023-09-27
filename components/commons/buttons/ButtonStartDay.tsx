'use client';

import React, { useState } from 'react';
import { useAppSelector } from '@/hooks';
import Notification from '@/components/ui/modal/Notification';
import MainButton from './MainButton';
import { getUserFromClient, postDeliveries } from '@/adapters';
import { useRouter } from 'next/navigation';

const ButtonStartDay = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [buttonText, setButtonText] = useState('');

    const router = useRouter();
    const { totalPackages, ordersSelected } = useAppSelector(
        (state) => state.packages
    );

    const handleModalOpen = () => {
        if (totalPackages === 0 || totalPackages > 10) {
            setModalMessage('You must select at least one package');
            setButtonText('Ok');
            setIsSuccess(false);
        } else {
            setModalMessage('Are you sure you want to start the day?');
            setButtonText('Yes');
            setIsSuccess(true);
        }
        setShowModal(true);
    };

    const handleStartDay = async () => {
        setShowModal(false);
        const user = await getUserFromClient();
        console.log(user);

        try {
            const res = await postDeliveries(ordersSelected);
            console.log(res);
        } catch (error) {
            console.log('sadas', error);
        }

        router.push('/dealer/home');
    };

    return (
        <>
            <div
                style={{
                    width: '380px',
                    padding: '20px',
                    margin: 'auto',
                }}
            >
                <MainButton
                    btnGreen
                    text='Start day'
                    onClick={handleModalOpen}
                />
            </div>

            <Notification
                showModal={showModal}
                buttonText={buttonText}
                message={modalMessage}
                isSuccess={isSuccess}
                onSuccess={handleStartDay}
                onClose={() => setShowModal(false)}
            />
        </>
    );
};

export default ButtonStartDay;
