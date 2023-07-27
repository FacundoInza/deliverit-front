import React, { FC } from 'react';
import style from './ItemCheckbox.module.css';

interface Props {
    address: string;
    city: string;
}

export const ItemCheckbox: FC<Props> = ({ address, city }) => {
    return (
        <label className={style.container}>
            <input type='checkbox' />
            <div className={style.checkmark}></div>

            <div className='ml-2'>
                <p className='text-sm text-primary'>{address},</p>
                <p className='text-sm text-primary c-primary'>{city}</p>
            </div>
        </label>
    );
};
