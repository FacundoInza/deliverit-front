'use client';

import React, { FC } from 'react';
import { ItemCheckbox } from '@/components/commons/checkbox';

import { IOrder } from '@/interfaces';
import ItemTotal from '@/components/commons/item-quantity/ItemTotal';

interface Props {
    pack: IOrder;
}

export const SelectPackages: FC<Props> = ({ pack }) => {
    return (
        <div className='flex items-center border-0.5 border-primary rounded-custom-10 w-full h-14 p-3 mt-3'>
            <ItemCheckbox
                packagesQuantity={pack.packagesQuantity}
                orderId={pack._id}
                address={pack.address}
                city={'CABA'}
            />
            <ItemTotal quantity={pack.packagesQuantity} />
        </div>
    );
};
