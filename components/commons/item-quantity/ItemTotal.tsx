import React, { FC } from 'react';

interface Props {
    quantity: number;
}

const ItemTotal: FC<Props> = ({ quantity }) => {
    return (
        <div className='flex items-center border-0.5 border-primary w-24 h-8 rounded-xl p-2'>
            <span className='text-lg text-primary ml-1 mr-1 w-full'>
                Total:
            </span>
            <span className='text-lg text-primary ml-1 mr-1 w-full'>
                {quantity}
            </span>
        </div>
    );
};

export default ItemTotal;
