import React, { FC } from 'react';

interface Props {
    quantity: number;
}

const ItemTotal: FC<Props> = ({ quantity }) => {
    return (
        <div className='flex items-center border-0.5 border-primary w-18 h-8 rounded-xl p-2'>
            <span className='text-sm md:text-lg text-primary ml-1 mr-1 w-full'>
                Qty:
            </span>
            <span className='text-sm md:text-lg text-primary ml-1 mr-1 w-full'>
                {quantity}
            </span>
        </div>
    );
};

export default ItemTotal;
