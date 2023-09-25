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

    return (
        <>
            {loading ? (
                <div className='flex justify-center'>
                    <Loader />
                </div>
            ) : (
                <DeliveryList deliveries={pendingsDeliveries} />
            )}
        </>
    );
};

export default DeliveryPendingList;
