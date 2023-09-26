'use client';

import React, { useState } from 'react';
import { useAppSelector } from '@/hooks';
import Notification from '@/components/ui/modal/Notification';

const ButtonStartDay = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [buttonText, setButtonText] = useState('');

    const { totalPackages } = useAppSelector((state) => state.packages);

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
                <button onClick={handleModalOpen}>Start day</button>
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
