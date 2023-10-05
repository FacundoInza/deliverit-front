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

            {deliveriesOnCourse && (
                <DeliveryList deliveries={deliveriesOnCourse} />

            )}
        </>
    );
};

export default DeliveryOnCourse;
