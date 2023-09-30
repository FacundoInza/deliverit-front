'use client';

import React, { useState } from 'react';
import { StatusBadge } from '../statusBadge/StatusBadge';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';
import { useAppDispatch } from '@/hooks';

import Notification from '../modal/Notification';
import { updateDelivery } from '@/redux/features/deliveries/deliveriesThunk';
import Link from 'next/link';

interface CardProps {
    deliveryID: string;
    deliveryAddress: string;
    status: string;
}

const colorMap: { [key: string]: string } = {
    delivered: 'text-delivered',
    'in progress': 'text-inProgress',
    pending: 'text-pending',
    inactive: 'text-gray-500',
};

export const DeliveryCard: React.FC<CardProps> = ({
    deliveryID,
    deliveryAddress,
    status,
}) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(updateDelivery(deliveryID));
    };

    const deliveryIdFriendly = `#${deliveryID
        .slice(20, 24)
        .toLocaleUpperCase()}`;

    return (
        <>
            <div
                className='bg-white border border-primary rounded-2xl p-1 flex justify-center items-center space-x-2
         text-primary relative h-[90px] mb-2'
            >
                <Link href={`detailed-view/${deliveryID}`}>
                    <div className='ml-1 w-1/8'>
                        <span className={colorMap[status]}>
                            <MdOutlineDeliveryDining size={40} />
                        </span>
                    </div>
                </Link>
                <div className='flex-grow flex-col just space-y-1 border-l border-dashed border-gray-400 mx-1 px-2'>
                    <h3 className='text-lg font-semibold'>
                        {deliveryIdFriendly}
                    </h3>
                    <div className='mr-[40px]'>
                        <p>{deliveryAddress}</p>
                    </div>
                </div>
                <div className='flex flex-col align-bottom absolute top-4 right-1'>
                    <StatusBadge status={status} />
                    {status !== 'delivered' && (
                        <div className='mt-2 flex flex-col justify-end'>
                            <button
                                className='flex items-center justify-end text-red-500 hover:text-red-700'
                                onClick={() => setShowModal(true)}
                            >
                                Cancel
                                <TiDeleteOutline color='red' size={30} />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <Notification
                showModal={showModal}
                buttonText='Cancel Delivery'
                message='Are you sure you want to cancel the delivery?'
                isSuccess={false}
                onNotSuccess={handleDelete}
                onCloseModal={() => setShowModal(false)}
            />
        </>
    );
};
