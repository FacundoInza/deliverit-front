import React, { FC } from 'react';
import { DropdownCard } from '@/components/ui/cards/DropdownCard';
import MainButton from '@/components/commons/buttons/MainButton';
import { DeliveryList } from '@/components/ui/lists';
import { getDeliveries } from '@/adapters';
import { IDelivery, ResponsePaginated } from '@/interfaces';

const Home: FC = async () => {
    let res: ResponsePaginated<IDelivery> = await getDeliveries({
        status: 'pending',
    });
    const pendingDeliveries = res.data;
    const pendingTotalItems = res.totalItems;
    res = await getDeliveries({ status: 'delivered' });

    const deliveredDeliveries = res.data;
    const deliveredTotalItems = res.totalItems;

    return (
        <>
            <nav className='bg-primary'>
                <div style={{ height: '75vh' }}>
                    <DropdownCard
                        title='Pending deliveries'
                        subtitle={`${pendingTotalItems} pending`}
                    >
                        <DeliveryList deliveries={pendingDeliveries} />
                    </DropdownCard>

                    <DropdownCard
                        title='Delivery history'
                        subtitle={`${deliveredTotalItems} delivered`}
                    >
                        <DeliveryList deliveries={deliveredDeliveries} />
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
