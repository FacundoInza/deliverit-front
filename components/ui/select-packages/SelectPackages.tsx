import React, { FC } from 'react';
import { ItemQuantity } from '../../commons/item-quantity';
import { ItemCheckbox } from '../../commons/checkbox';
import { IPackage } from '../../../interfaces/IPackage';

interface Props {
    pack: IPackage;
}

export const SelectPackages: FC<Props> = ({ pack }) => {
    return (
        <div className='flex items-center border-0.5 border-primary rounded-custom-10 w-full h-14 p-3 mt-3'>
            <ItemCheckbox
                address={pack.address}
                city={pack.city}
                available={pack.available}
            />
            <ItemQuantity quantity={pack.quantity} />
        </div>
    );
};
