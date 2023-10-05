import { IDelivery } from '@/interfaces';
import React, { FC } from 'react';
import { DeliveryList } from '.';

interface Props {
    deliveriesOnCourse: IDelivery[];
}

const DeliveryOnCourse: FC<Props> = ({ deliveriesOnCourse }) => {
    return (
        <>
            {deliveriesOnCourse && (
                <DeliveryList deliveries={deliveriesOnCourse} />
            )}
        </>
    );
};

export default DeliveryOnCourse;
