import React, { FC } from 'react';
import { DeliveryCard } from '../cards';
import { IDelivery } from '@/interfaces';

interface Props {
    deliveries: IDelivery[];
}

export const DeliveryList: FC<Props> = async ({ deliveries }) => {
    return (
        <>
            {deliveries.map((delivery) => (
                <DeliveryCard
                    key={delivery._id}
                    deliveryID={delivery._id}
                    deliveryAddress={delivery.orderId.address}
                    status={delivery.status}
                    showCancel={true}
                />
            ))}
        </>
    );
};
