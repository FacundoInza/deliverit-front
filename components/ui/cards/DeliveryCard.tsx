'use client';

import React, { useEffect, useState } from 'react';
import { StatusBadge } from '../statusBadge/StatusBadge';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { FaMapLocationDot } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { TiDeleteOutline } from 'react-icons/ti';
import { useAppDispatch } from '@/hooks';
import Notification from '../modal/Notification';
import Link from 'next/link';
import MapModal from '../modal/MapModal';
import { updateDelivery } from '@/redux/features/deliveries/deliveriesThunk';


interface CardProps {
    deliveryID: string;
    deliveryAddress: string;
    status: string;
    coords: {
        lat: number;
        lng: number;
    };
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
    coords,
}) => {
    const [showModal, setShowModal] = useState(false);
    const [showMapModal, setShowMapModal] = useState(false);
    const [buttonText, setButtonText] = useState('Cancel Delivery');
    const [message, setMessage] = useState(
        'Are you sure you want to cancel this delivery?'
    );

    useEffect(() => {
        if (status === 'pending') {
            setButtonText('Cancel Delivery');
            setMessage('Are you sure you want to cancel this delivery?');
        }
        if (status === 'on-course') {
            setButtonText('Return to pending');
            setMessage('Are you sure you want to return this delivery?');
        }
    }, []);

    const dispatch = useAppDispatch();
    const router = useRouter();


    const handleDelete = () => {
        if (status === 'pending') {
            dispatch(updateDelivery({ id: deliveryID, status: 'cancelled' }));
        }
        if (status === 'on-course') {
            dispatch(updateDelivery({ id: deliveryID, status: 'pending' }));
        }
    };

    const deliveryIdFriendly = `#${deliveryID
        .slice(20, 24)
        .toLocaleUpperCase()}`;

    const truncatedAddress =
        deliveryAddress.length > 30
            ? `${deliveryAddress.substring(0, 30)}...`
            : deliveryAddress;

    return (
        <>
            <div className='bg-white border border-primary rounded-2xl p-1 flex justify-center items-center space-x-2 text-primary relative h-[90px] mb-2'>
                <Link href={`detailed-view/${deliveryID}`}>
                    <div className='ml-1 w-1/8'>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <span className={colorMap[status]}>
                                <MdOutlineDeliveryDining size={40} />
                            </span>
                        </motion.div>
                    </div>
                </Link>
                <div className='flex-grow flex-col space-y-1 border-l border-dashed border-gray-400 mx-1 px-2 relative group'>
                    <div className='flex justify-between items-start'>
                        <h3 className='text-sm md:text-lg font-semibold'>
                            {deliveryIdFriendly}
                        </h3>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <span className={colorMap[status]}>
                                <FaMapLocationDot
                                    size={20}
                                    color='#22577A'
                                    className='ml-2 mr-32 md:mr-60 text-gray-500 cursor-pointer'
                                    onClick={() => setShowMapModal(true)}
                                />
                            </span>
                        </motion.div>
                    </div>

                    <div className='text-sm md:text-lg mr-[80px]'>
                        <p className='md:hidden inline-block'>
                            {truncatedAddress}
                        </p>
                        <p className='hidden md:inline'>{deliveryAddress}</p>
                        <div className='absolute top-0 left-0 mt-8 w-48 bg-white border border-gray-300 rounded-md shadow-lg p-2 opacity-0 group-hover:opacity-100 md:group-hover:opacity-0 transition-opacity duration-200'>
                            {deliveryAddress}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col align-bottom absolute top-4 z-10 right-1'>
                    <StatusBadge status={status} />

                    {(status === 'pending' || status === 'on-course') && (

                    {status === 'pending' || status === 'on-course' ? (

                        <div className='mt-2 flex flex-col justify-end'>
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <button
                                    className='flex items-center justify-end text-sm md:text-lg text-red-500 hover:text-red-700'
                                    onClick={() => setShowModal(true)}
                                >
                                    {status === 'pending'
                                        ? 'Cancel'
                                        : 'Postpone'}

                                    <TiDeleteOutline color='red' size={30} />
                                </button>
                            </motion.div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>

            <Notification
                showModal={showModal}

                buttonText={buttonText}
                message={message}
                isSuccess={false}
                onNotSuccess={handleAction}
                onCloseModal={() => setShowModal(false)}
            />
            <MapModal
                showModal={showMapModal}
                onClose={() => setShowMapModal(false)}
                coords={coords}
                address={deliveryAddress}
            />
        </>
    );
};
