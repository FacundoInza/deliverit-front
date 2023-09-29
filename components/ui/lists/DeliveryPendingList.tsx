'use client';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { getPendingDeliveries } from '@/redux/features/deliveries/deliveriesThunk';
import React, { useEffect } from 'react';
import { DeliveryList } from '.';
import { Loader } from '@/components/commons/loaders/Loader';

const DeliveryPendingList = () => {
    const dispatch = useAppDispatch();
    const { pendingsDeliveries, loading } = useAppSelector(
        (state) => state.deliveries
    );

    useEffect(() => {
        dispatch(getPendingDeliveries());
    }, []);

    console.log(pendingsDeliveries);
    return (
        <>
            {loading ? (
                <div className='flex justify-center'>
                    <Loader />
                </div>
            ) : (
                <>
                    {!pendingsDeliveries ? (
                        <div className='text-center text-red-500'>
                            You have no pending deliveries
                        </div>
                    ) : (
                        <DeliveryList deliveries={pendingsDeliveries} />
                    )}
                </>
            )}
        </>
    );
};

export default DeliveryPendingList;
