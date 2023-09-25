import React, { FC } from 'react';
import { DropdownCard } from '@/components/ui/cards/DropdownCard';
import MainButton from '@/components/commons/buttons/MainButton';
import { getDeliveries, getUserFromServer } from '@/adapters';
import { IDelivery, ResponsePaginated } from '@/interfaces';

import DeliveryPendingList from '@/components/ui/lists/DeliveryPendingList';
import DeliveryCompleteList from '@/components/ui/lists/DeliveryCompleteList';

const Home: FC = async () => {
    const user = await getUserFromServer();

    let res: ResponsePaginated<IDelivery> = await getDeliveries({
        status: 'pending',
        userId: user.id,
    });

    const pendingTotalItems = res.totalItems;
    res = await getDeliveries({ status: 'delivered', userId: user.id });

    const deliveredTotalItems = res.totalItems;

    return (
        <>
            <nav className='bg-primary'>
                <div style={{ height: '75vh' }}>
                    <DropdownCard
                        title='Pending deliveries'
                        subtitle={`${pendingTotalItems} pending`}
                    >
                        {user.enabled ? (
                            <DeliveryPendingList />
                        ) : (
                            <div className='text-center text-white'>
                                You are not enabled to receive packages
                            </div>
                        )}
                    </DropdownCard>

                    <DropdownCard
                        title='Delivery history'
                        subtitle={`${deliveredTotalItems} delivered`}
                    >
                        <DeliveryCompleteList />
                    </DropdownCard>
                </div>
                <div className='flex justify-center mt-4 w-72 m-auto'>
                    <MainButton
                        text={'Get packages'}
                        btnGreen={true}
                        redirect='/dealer/packages/1'
                    />
                </div>
            </nav>
        </>
    );
};
export default Home;
