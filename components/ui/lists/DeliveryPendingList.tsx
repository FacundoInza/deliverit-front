'use client';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { getPendingDeliveries } from '@/redux/features/deliveries/deliveriesThunk';
import React, { useEffect } from 'react';
import { DeliveryList } from '.';

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
                <div className='text-center text-white'>Loading...</div>
            ) : (
                <DeliveryList deliveries={pendingsDeliveries} />
            )}
        </>
    );
};

export default DeliveryPendingList;
