import React from 'react';
import { IconButton } from '../buttons';
import { IconMinusSvg, IconPlusSvg } from '../SVG';

export const ItemQuantity = () => {
    return (
        <div className='flex items-center border-0.5 border-primary w-24 h-8 rounded-xl p-2'>
            <IconButton icon={<IconMinusSvg />} />
            <span className='text-lg text-primary ml-1 mr-1'>{2}</span>
            <IconButton icon={<IconPlusSvg />} />
        </div>
    );
};
