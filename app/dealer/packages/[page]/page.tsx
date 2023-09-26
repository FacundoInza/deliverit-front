'use client';

import React, { FC, useState } from 'react';
import { GeneralCard } from '@/components/ui/cards/GeneralCard';
import MainButton from '@/components/commons/buttons/MainButton';
import { getOrders } from '@/adapters/orderAdapters';
import { IOrder, ResponsePaginated } from '@/interfaces';
import { SelectPackages } from '@/components/ui/select-packages';
import Pagination from '@/components/commons/pagination/Pagination';
import { getUserFromServer } from '@/adapters';
import { useRouter } from 'next/navigation';
import Notification from '@/components/ui/modal/Notification';

interface Props {
    params: {
        page: string;
    };
}

const InitWorkDay: FC<Props> = async ({ params }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isModalSuccess, setIsModalSuccess] = useState(false);
    const router = useRouter();
    const { data, totalPages }: ResponsePaginated<IOrder> = await getOrders({
        status: 'unassigned',
        page: Number(params.page),
    });

    const user = await getUserFromServer();
    const handleNext = () => {
        if (user.blockUntil && new Date() < user.blockUntil) {
            setModalMessage(
                `You are not allowed to work until ${user.blockUntil}`
            );
            setIsModalSuccess(false);
            setShowModal(true);
        } else if (user.enabled) {
            //TO DO HANDLE LOGIC TO SET ORDERS IN BACKEND
            //

            router.push('/dealer/home');
        } else {
            router.push('/dealer/sworn-statement');
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <GeneralCard title='Get packages'>
                <h2 className='text-primary text-center'>
                    How many packages will you deliver today?
                </h2>
                <div
                    className='border-primary'
                    style={{
                        borderTop: '2px dotted',
                        borderSpacing: '10px',
                        margin: 10,
                    }}
                ></div>
                {data &&
                    data.map((pack, i) => (
                        <SelectPackages key={i} pack={pack} />
                    ))}
                {totalPages > 1 && (
                    <div className='flex justify-center mt-4'>
                        <Pagination
                            currentPage={Number(params.page)}
                            totalPages={totalPages}
                        />
                    </div>
                )}
            </GeneralCard>

            <div
                style={{
                    width: '380px',
                    padding: '20px',
                    margin: 'auto',
                }}
            >
                <MainButton text='Start Day' btnGreen onClick={handleNext} />
            </div>
            <Notification
                showModal={showModal}
                message={modalMessage}
                isSuccess={isModalSuccess}
                onClose={handleCloseModal}
                buttonText={'Close'}
                singleButton={true}
            />
        </>
    );
};

export default InitWorkDay;
