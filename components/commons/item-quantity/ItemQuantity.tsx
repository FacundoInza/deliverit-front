import React, { FC } from 'react';
import { IconButton } from '../buttons';
import { IconMinusSvg, IconPlusSvg } from '../SVG';

interface Props {
    quantity: number;
}

export const ItemQuantity: FC<Props> = ({ quantity }) => {
    return (
        <div className='flex items-center border-0.5 border-primary w-24 h-8 rounded-xl p-2'>
            <IconButton icon={<IconMinusSvg />} />
            <span className='text-lg text-primary ml-1 mr-1'>{quantity}</span>
            <IconButton icon={<IconPlusSvg />} />
        </div>
    );
};
