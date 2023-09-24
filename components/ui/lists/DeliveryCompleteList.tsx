'use client';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { getDeliveredCompleted } from '@/redux/features/deliveries/deliveriesThunk';
import React, { useEffect } from 'react';
import { DeliveryList } from '.';

const DeliveryCompleteList = () => {
    const dispatch = useAppDispatch();
    const { finishedDeliveries, loading } = useAppSelector(
        (state) => state.deliveries
    );

    useEffect(() => {
        dispatch(getDeliveredCompleted());
    }, []);

    return (
        <>
            {loading ? (
                <div className='text-center text-white'>Loading...</div>
            ) : (
                <DeliveryList deliveries={finishedDeliveries} />
            )}
        </>
    );
};

export default DeliveryCompleteList;
