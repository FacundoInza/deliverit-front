'use client';

import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import Notification from '@/components/ui/modal/Notification';
import MainButton from './MainButton';
import { postDeliveries } from '@/adapters';
import { useRouter } from 'next/navigation';
import { deletePackagesSelected } from '@/redux/features/packages/packagesSlice';

interface Props {
    enabled: boolean;
}

const ButtonStartDay: FC<Props> = ({ enabled }) => {
    const dispatch = useAppDispatch();

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [buttonText, setButtonText] = useState('');
    const [singleButton, setSingleButton] = useState(false);

    const router = useRouter();
    const { ordersSelected } = useAppSelector((state) => state.packages);

    const handleNotStartDay = () => {
        setShowModal(false);
    };

    const handleStartDay = async () => {
        try {
            await postDeliveries(ordersSelected);
            dispatch(deletePackagesSelected());
            setShowModal(false);
            router.push('/dealer/home');
        } catch (error: any) {
            console.log(error);
            const { message } = error.response.data.error.data;
            setIsSuccess(false);
            setButtonText('Ok');
            setSingleButton(true);
            setModalMessage(message);
        }
    };

    const handleOpenModal = async () => {
        setShowModal(true);
        setButtonText('Start day');
        setSingleButton(false);
        setIsSuccess(true);
        setModalMessage('Are you sure you want to start the day?');
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
                    disabled={!enabled}
                    btnGreen
                    text='Start day'
                    onClick={handleOpenModal}
                />
            </div>

            <Notification
                showModal={showModal}
                buttonText={buttonText}
                message={modalMessage}
                isSuccess={isSuccess}
                singleButton={singleButton}
                onSuccess={handleStartDay}
                onNotSuccess={handleNotStartDay}
                onCloseModal={() => setShowModal(false)}
            />
        </>
    );
};

export default ButtonStartDay;
