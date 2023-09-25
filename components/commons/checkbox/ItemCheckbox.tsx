import React, { FC, useState } from 'react';
import style from './ItemCheckbox.module.css';
import { useAppDispatch } from '@/hooks';
import { useAppSelector } from '../../../hooks/useAppSelector';
import {
    addOrderSelected,
    removeOrderSelected,
} from '@/redux/features/packages/packagesSlice';
import Notification from '@/components/ui/modal/Notification';

interface Props {
    packagesQuantity: number;
    orderId: string;
    address: string;
    city: string;
}

export const ItemCheckbox: FC<Props> = ({
    packagesQuantity,
    orderId,
    address,
    city,
}) => {
    const dispatch = useAppDispatch();
    const [isSelected, setIsSelected] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { totalPackages } = useAppSelector((state) => state.packages);

    const handleCheckboxChange = () => {
        if (isSelected) {
            setIsSelected(false);
            dispatch(
                removeOrderSelected({
                    orderSelected: { orderId },
                    packagesQuantity,
                })
            );
        } else {
            if (totalPackages + packagesQuantity <= 10) {
                setIsSelected(true);
                dispatch(
                    addOrderSelected({
                        orderSelected: { orderId },
                        packagesQuantity,
                    })
                );
            } else {
                setShowModal(true);
            }
        }
    };
    return (
        <>
            <label className={style.container}>
                <input
                    type='checkbox'
                    checked={isSelected}
                    onChange={handleCheckboxChange}
                />
                <div className={style.checkmark}></div>

                <div className='ml-2'>
                    <p className='text-sm text-primary'>{address},</p>
                    <p className='text-sm text-primary c-primary'>{city}</p>
                </div>
            </label>

            <Notification
                showModal={showModal}
                isSuccess={false}
                message='You can only select up to 10 packages'
                onClose={() => setShowModal(false)}
                buttonText='Ok'
            />
        </>
    );
};
