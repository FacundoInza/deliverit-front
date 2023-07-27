import React from 'react';
import { StatusBadge } from '../statusBadge/StatusBadge';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';

interface CardProps {
    deliveryID: string;
    deliveryAddress: string;
    status: 'delivered' | 'in progress' | 'pending' | 'inactive';
}

const colorMap = {
    delivered: 'text-green-400',
    'in progress': 'text-yellow-500',
    pending: 'text-gray-500',
    inactive: 'text-purple-500',
};

export const DeliveryCard: React.FC<CardProps> = ({
    deliveryID,
    deliveryAddress,
    status,
}) => {
    return (
        <div className='bg-white border border-primary rounded-2xl p-6 flex items-center space-x-4 text-primary'>
            <div className='flex-none w-1/8 '>
                <span className={colorMap[status]}>
                    <MdOutlineDeliveryDining size={100} />
                </span>
            </div>
            <div className='self-stretch border-l border-dashed border-gray-400 mx-4' />
            <div className='flex-grow flex flex-col space-y-2 pl-4'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-semibold'>{deliveryID}</h2>
                    <StatusBadge status={status} />
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='text-lg font-semibold'>
                            Delivery Address
                        </h3>
                        <p>{deliveryAddress}</p>
                    </div>
                    <button className='flex items-center space-x-1 text-red-500 hover:text-red-700'>
                        <span>Cancel</span>

                        <TiDeleteOutline color='red' size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
};
