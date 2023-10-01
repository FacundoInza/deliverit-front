import React, { FC, useEffect, useState } from 'react';
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
    const { ordersSelected } = useAppSelector((state) => state.packages);

    useEffect(() => {
        const alreadySelected = ordersSelected.some(
            (order) => order.orderId === orderId
        );
        setIsSelected(alreadySelected);
        setIsLoading(false);
    }, [ordersSelected]);

    const [isLoading, setIsLoading] = useState(ordersSelected ? true : false);
    const [isSelected, setIsSelected] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { totalPackages } = useAppSelector((state) => state.packages);

    const handleCheckboxChange = () => {
        if (isSelected) {
            setIsSelected(false);
            dispatch(
                removeOrderSelected({
                    orderId: orderId,
                    packagesQuantity: packagesQuantity,
                })
            );
        } else {
            if (totalPackages + packagesQuantity <= 10) {
                setIsSelected(true);
                dispatch(
                    addOrderSelected({
                        orderId: orderId,
                        packagesQuantity: packagesQuantity,
                    })
                );
            } else {
                setShowModal(true);
            }
        }
    };
    return (
        <>
            {isLoading ? (
                <label className='flex items-center cursor-pointer text-lg select-none w-full'>
                    <div className='h-5 w-5 bg-gray-300 animate-pulse'></div>
                    <div className='ml-2'>
                        <div className='h-3 w-20 bg-gray-300 animate-pulse'></div>
                        <div className='h-3 w-16 bg-gray-300 animate-pulse'></div>
                    </div>
                </label>
            ) : (
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
            )}

            <Notification
                showModal={showModal}
                isSuccess={false}
                message='You can only select up to 10 packages'
                onNotSuccess={() => setShowModal(false)}
                onCloseModal={() => setShowModal(false)}
                singleButton={true}
                buttonText='Ok'
            />
        </>
    );
};
