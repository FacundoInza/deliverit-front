'use client';

import React, { FC, useState } from 'react';
import { DeliveryCard } from '@components/ui/deliveryCard/DeliveryCard';
import { DropdownCard } from '@components/ui/dropdownCard/DropdownCard';
import MainButton from '@components/commons/buttons/MainButton';

const Home: FC = () => {
    const dummyData = [
        {
            deliveryID: '#02A35',
            deliveryAddress: 'Amenabar 2356, CABA',
            status: 'pending',
        },
        {
            deliveryID: '#02A35',
            deliveryAddress: 'Amenabar 2356, CABA',
            status: 'in progress',
        },
        {
            deliveryID: '#02A35',
            deliveryAddress: 'Amenabar 2356, CABA',
            status: 'inactive',
        },
        {
            deliveryID: '#02A35',
            deliveryAddress: 'Amenabar 2356, CABA',
            status: 'delivered',
        },
    ];

    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const handleExpand = (cardIndex: number) => {
        if (cardIndex === expandedCard) {
            setExpandedCard(null);
        } else {
            setExpandedCard(cardIndex);
        }
    };

    return (
        <>
            <DropdownCard
                title='Pending deliveries'
                subtitle='3 pending'
                expanded={expandedCard === 1}
                onExpand={() => handleExpand(1)}
            >
                {dummyData
                    .filter((delivery) => delivery.status !== 'delivered')
                    .map((delivery) => (
                        <DeliveryCard
                            key={delivery.deliveryID}
                            deliveryID={delivery.deliveryID}
                            deliveryAddress={delivery.deliveryAddress}
                            status='pending'
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
                {dummyData
                    .filter((delivery) => delivery.status === 'delivered')
                    .map((delivery) => (
                        <DeliveryCard
                            key={delivery.deliveryID}
                            deliveryID={delivery.deliveryID}
                            deliveryAddress={delivery.deliveryAddress}
                            status='delivered'
                            showCancel={true}
                        />
                    ))}
            </DropdownCard>
            <div className='flex justify-center mt-4'>
                <MainButton text={'Get packages'} btnGreen={true} />
            </div>
        </>
    );
};
export default Home;
