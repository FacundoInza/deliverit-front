'use client';

import React, { FC, useState } from 'react';
import MainButton from './MainButton';
import { IDeliveryResponse } from '../../../interfaces/IDelivery';
import { api } from '@/api/axiosInstance';
import { useRouter } from 'next/navigation';
import Notification from '@/components/ui/modal/Notification';
import { AxiosError } from 'axios';

interface ErrorResponse {
    error: {
        data: {
            message: string;
        };
    };
}

const StartInteractiveButtons: FC<{ delivery: IDeliveryResponse }> = ({
    delivery,
}) => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isModalSuccess, setIsModalSuccess] = useState(false);
    const router = useRouter();

    const id = delivery.data._id;

    const startDelivery = async () => {
        console.log('start delivery called');
        try {
            const result = await api.put(`/api/delivery/${id}`, {
                status: 'on-course',
            });
            console.log('Start Result', result);
            setModalMessage('Delivery started!');
            setIsModalSuccess(true);
            setShowModal(true);
        } catch (error) {
            console.log('Start Delivery error', error);
            const axiosError = error as AxiosError<ErrorResponse>;
            const errorMessage =
                axiosError?.response?.data?.error?.data?.message ??
                (error as Error).message;
            setModalMessage(errorMessage || (error as Error).message);

            setIsModalSuccess(false);
            setShowModal(true);
        }
    };
    const completeDelivery = async () => {
        console.log('complete delivery called');
        try {
            const result = await api.put(`/api/delivery/${id}`, {
                status: 'delivered',
            });
            console.log('Complete Result', result);
            setModalMessage('Delivery completed!');
            setIsModalSuccess(true);
            setShowModal(true);
        } catch (error) {
            console.log('Complete Delivery error', error);
            setModalMessage((error as Error).message);
            setIsModalSuccess(false);
            setShowModal(true);
        }
    };

    return (
        <div>
            <MainButton
                text={
                    delivery.data.status === 'on-course'
                        ? 'Finish'
                        : 'Deliver IT!'
                }
                btnGreen
                onClick={() => {
                    delivery.data.status === 'on-course'
                        ? completeDelivery()
                        : startDelivery();
                }}
            />
            {showModal && (
                <Notification
                    message={modalMessage}
                    isSuccess={isModalSuccess}
                    singleButton
                    showModal={showModal}
                    buttonText={isModalSuccess ? 'OK' : 'Try again'}
                    onNotSuccess={() => setShowModal(false)}
                    onSuccess={() => {
                        router.push('/dealer/home');
                        router.refresh();
                    }}
                />
            )}
        </div>
    );
};

export default StartInteractiveButtons;
