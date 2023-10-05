import React, { FC } from 'react';
import { DropdownCard } from '@/components/ui/cards/DropdownCard';
import MainButton from '@/components/commons/buttons/MainButton';
import { getDeliveries, getUserFromServer } from '@/adapters';
import { IDelivery, ResponsePaginated } from '@/interfaces';
import DeliveryPendingList from '@/components/ui/lists/DeliveryPendingList';
import DeliveryCompleteList from '@/components/ui/lists/DeliveryCompleteList';
import DeliveryOnCourse from '@/components/ui/lists/DeliveryOnCourse';

const Home: FC = async () => {
    const user = await getUserFromServer();

    let res: ResponsePaginated<IDelivery> = await getDeliveries({
        status: 'pending',
        userId: user.id,
    });

    const pendingTotalItems = res.totalItems;

    res = await getDeliveries({ status: 'delivered', userId: user.id });

    const deliveredTotalItems = res.totalItems;

    res = await getDeliveries({ status: 'on-course', userId: user.id });

    const deliveriesOnCourse = res.data;
    const totalItemsOnCourse = res.totalItems;

    return (
        <>
            <nav className='bg-primary'>
                <div
                    className='content-container'
                    style={{
                        height: '90vh',
                        overflowY: 'auto',
                        paddingBottom: '4rem',
                    }}
                >
                    <DropdownCard
                        title='Pending deliveries'
                        subtitle={`${
                            pendingTotalItems + totalItemsOnCourse
                        } pending`}
                    >
                        {user.blockUntil &&
                        new Date(user.blockUntil).getTime() > Date.now() ? (
                            <div className='text-center text-red-500'>
                                You are not allowed to work until{' '}
                                {`${new Date(user.blockUntil)}`}
                            </div>
                        ) : (
                            <>
                                <DeliveryOnCourse
                                    deliveriesOnCourse={deliveriesOnCourse}
                                />
                                <DeliveryPendingList />
                            </>
                        )}
                    </DropdownCard>

                    <DropdownCard
                        title='Delivery history'
                        subtitle={`${deliveredTotalItems} delivered`}
                    >
                        <DeliveryCompleteList />
                    </DropdownCard>

                    <div className='flex justify-center mt-4 w-72 m-auto'>
                        <MainButton
                            text={'Get packages'}
                            btnGreen={true}
                            redirect='/dealer/packages/1'
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Home;
