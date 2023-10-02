'use client';

import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import Notification from '@/components/ui/modal/Notification';
import MainButton from './MainButton';
import { postDeliveries } from '@/adapters';
import { useRouter } from 'next/navigation';
import { deletePackagesSelected } from '@/redux/features/packages/packagesSlice';
import { BlockPopover } from '@/components/ui/blockPopover/BlockPopover';

interface Props {
    enabled: boolean;
    isBlocked: boolean | null;
    blockUntil: Date | null;
    onShowSwornModal?: () => void;
}

const ButtonStartDay: FC<Props> = ({ enabled, isBlocked, blockUntil }) => {
    const dispatch = useAppDispatch();

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [buttonText, setButtonText] = useState('');
    const [singleButton, setSingleButton] = useState(false);
    const [showPopover, setShowPopover] = useState(false);

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

    const handleNavigateToSworn = () => {
        router.push('/dealer/sworn-statement');
    };

    return (
        <>
            <div
                style={{
                    width: '380px',
                    padding: '20px',
                    margin: 'auto',
                    position: 'relative',
                }}
            >
                {enabled ? (
                    <MainButton
                        disabled={!enabled}
                        btnGreen
                        text='Start day'
                        onClick={handleOpenModal}
                    />
                ) : isBlocked ? (
                    <div
                        onMouseEnter={() => setShowPopover(true)}
                        onMouseLeave={() => setShowPopover(false)}
                    >
                        <MainButton disabled={true} btnGreen text='Start day' />
                        {showPopover && (
                            <BlockPopover blockUntil={blockUntil} />
                        )}
                    </div>
                ) : (
                    <MainButton
                        btnGreen
                        text='Fill Sworn Statement'
                        onClick={handleNavigateToSworn}
                    />
                )}
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
