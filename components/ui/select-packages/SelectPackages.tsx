import React from 'react';
import { ItemQuantity } from '../../commons/item-quantity';
import { ItemCheckbox } from '../../commons/checkbox';

export const SelectPackages = () => {
    return (
        <div className='flex items-center border-0.5 border-primary rounded-custom-10 w-full h-14 p-3'>
            <ItemCheckbox address='Amebar 2344' city='CABA' />
            <ItemQuantity />
        </div>
    );
};
