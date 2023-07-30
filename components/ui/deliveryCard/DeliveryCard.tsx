import React from 'react';
import { StatusBadge } from '../statusBadge/StatusBadge';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';

interface CardProps {
    deliveryID: string;
    deliveryAddress: string;
    status: 'delivered' | 'in progress' | 'pending' | 'inactive';
    showCancel: boolean;
}

const colorMap = {
    delivered: 'text-green-400',
    'in progress': 'text-yellow-500',
    pending: 'text-gray-500',
    inactive: 'text-purple-500',
};

const handleClick = () => {
    //delete
};

export const DeliveryCard: React.FC<CardProps> = ({
    deliveryID,
    deliveryAddress,
    status,
    showCancel,
}) => {
    return (
        <div
            className='bg-white border border-primary rounded-2xl p-1 flex justify-center items-center space-x-2
         text-primary relative h-[90px] mb-2'
        >
            <div className='ml-1 w-1/8'>
                <span className={colorMap[status]}>
                    <MdOutlineDeliveryDining size={40} />
                </span>
            </div>
            <div className='flex-grow flex-col just space-y-1 border-l border-dashed border-gray-400 mx-1 px-2'>
                <h3 className='text-lg font-semibold'>{deliveryID}</h3>
                <div className='mr-[40px]'>
                    <p>{deliveryAddress}</p>
                </div>
            </div>
            <div className='flex flex-col align-bottom absolute top-4 right-1'>
                <StatusBadge status={status} />
                {showCancel ? (
                    <div className='mt-2 flex flex-col justify-end'>
                        <button
                            onClick={handleClick}
                            className='flex justify-end text-red-500 hover:text-red-700'
                        >
                            <TiDeleteOutline color='red' size={30} />
                        </button>
                        {/* <span className='flex justify-end space-x-1 text-red-500 hover:text-red-700'>
                        Cancel
                    </span> */}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};
