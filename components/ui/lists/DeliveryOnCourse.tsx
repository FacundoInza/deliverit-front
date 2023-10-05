'use client';

import React, { useEffect } from 'react';
import { DeliveryList } from '.';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getDeliveriesOnCourse } from '@/redux/features/deliveries/deliveriesThunk';

const DeliveryOnCourse = () => {
    const dispatch = useAppDispatch();
    const { onCourseDeliveries } = useAppSelector((state) => state.deliveries);

    useEffect(() => {
        dispatch(getDeliveriesOnCourse());
    }, []);

    return (
        <>
            {!onCourseDeliveries ? (
                <div className='flex justify-center'>
                    <div className='text-center text-red-500'>
                        You have no deliveries on course
                    </div>
                </div>
            ) : (
                <DeliveryList deliveries={onCourseDeliveries} />
            )}
        </>
    );
};

export default DeliveryOnCourse;
