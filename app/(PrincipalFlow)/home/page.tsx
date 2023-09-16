'use client';

import React, { FC, useState } from 'react';

import MainButton from '@components/commons/buttons/MainButton';
import { DeliveryCard, DropdownCard } from '@components/ui/cards';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { Navbar } from '../../../components/ui/navbar/Navbar';
import {
    selectFinishedDeliveries,
    selectPendingDeliveries,
} from '../../../redux/features/deliveries/deliveriesSelectors';

const Home: FC = () => {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const pendingDeliveries = useAppSelector(selectPendingDeliveries);
    const finishedDeliveries = useAppSelector(selectFinishedDeliveries);

    const handleExpand = (cardIndex: number) => {
        if (cardIndex === expandedCard) {
            setExpandedCard(null);
        } else {
            setExpandedCard(cardIndex);
        }
    };

    return (
        <>
            <nav className='bg-primary'>
                <Navbar isAuthenticated={true} />

                <div style={{ height: '75vh' }}>
                    <DropdownCard
                        title='Pending deliveries'
                        subtitle='3 pending'
                        expanded={expandedCard === 1}
                        onExpand={() => handleExpand(1)}
                    >
                        {pendingDeliveries.map((delivery) => (
                            <DeliveryCard
                                key={delivery.deliveryId}
                                deliveryID={delivery.deliveryId}
                                deliveryAddress={delivery.deliveryAddress}
                                status={delivery.status}
                                showCancel={true}
                            />
                        ))}
                    </DropdownCard>

                    <DropdownCard
                        title='Delivery history'
                        subtitle='1 delivered'
                        expanded={expandedCard === 2}
                        onExpand={() => handleExpand(2)}
                    >
                        {finishedDeliveries.map((delivery) => (
                            <DeliveryCard
                                key={delivery.deliveryId}
                                deliveryID={delivery.deliveryId}
                                deliveryAddress={delivery.deliveryAddress}
                                status={delivery.status}
                                showCancel={false}
                            />
                        ))}
                    </DropdownCard>
                </div>
                <div className='flex justify-center mt-4 w-72 m-auto'>
                    <MainButton text={'Get packages'} btnGreen={true} />
                </div>
            </nav>
        </>
    );
};
export default Home;
