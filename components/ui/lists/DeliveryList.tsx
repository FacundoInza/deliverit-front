'use client';

import React, { FC } from 'react';
import { DeliveryCard } from '../cards';
import { IDelivery } from '@/interfaces';

interface Props {
    deliveries: IDelivery[];
}

export const DeliveryList: FC<Props> = ({ deliveries }) => {
    return (
        <>
            {deliveries.map((delivery) => {
                return (
                    <DeliveryCard
                        key={delivery._id}
                        deliveryID={delivery._id}
                        coords={delivery.orderId?.coords}
                        deliveryAddress={delivery.orderId?.address}
                        status={delivery.status}
                    />
                );
            })}
        </>
    );
};
