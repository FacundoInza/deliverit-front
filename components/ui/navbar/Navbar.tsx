'use client';

import React, { FC, useState } from 'react';
import { LogoSvg } from '@/components/commons/SVG/LogoSvg';
import { LogOutSvg } from '@/components/commons/SVG/LogOutSvg';
import { api } from '@/api/axiosInstance';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import Notification from '../modal/Notification';
import { deleteCookie } from 'cookies-next';

interface Props {
    isAuthenticated: boolean;
}

interface ErrorResponse {
    message: string;
}

export const Navbar: FC<Props> = ({ isAuthenticated }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isModalSuccess, setIsModalSuccess] = useState(false);
    const router = useRouter();

    const logout = async () => {
        try {
            await api.post('/api/user/logout');
            localStorage.removeItem('token');
            deleteCookie('token');
            setModalMessage('You have been logged out');
            setIsModalSuccess(true);
            setShowModal(true);
            setTimeout(() => {
                router.push('/auth');
            }, 1000);
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>;
            if (axiosError && axiosError.response) {
                setModalMessage(axiosError.response.data.message);
            } else {
                setModalMessage('Something went wrong on logout');
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div
                className='flex justify-between py-4 px-6 md:px-40 '
                style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
            >
                <a href='/dealer/home' className='text-2xl font-bold'>
                    <LogoSvg />
                </a>
                {isAuthenticated && (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            borderRadius: 5,
                            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                        }}
                    >
                        <button onClick={logout}>
                            <LogOutSvg />
                        </button>
                    </div>
                )}
            </div>
            {showModal && (
                <Notification
                    isSuccess={isModalSuccess}
                    message={modalMessage}
                    onClose={handleCloseModal}
                    buttonText={isModalSuccess ? 'Go to home' : 'Retry'}
                    redirectLink={isModalSuccess ? '/auth' : '/home'}
                />
            )}
        </>
    );
};
