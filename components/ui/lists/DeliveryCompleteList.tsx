'use client';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { getDeliveredCompleted } from '@/redux/features/deliveries/deliveriesThunk';
import React, { useEffect } from 'react';
import { DeliveryList } from '.';
import { Loader } from '@/components/commons/loaders/Loader';

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
                <div className='flex justify-center'>
                    <Loader />
                </div>
            ) : (
                <>
                    {!finishedDeliveries ? (
                        <div className='text-center text-red-500'>
                            You have no complete deliveries
                        </div>
                    ) : (
                        <DeliveryList deliveries={finishedDeliveries} />
                    )}
                </>
            )}
        </>
    );
};

export default DeliveryCompleteList;
