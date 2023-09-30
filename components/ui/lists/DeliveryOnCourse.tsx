import { IDelivery } from '@/interfaces';
import React, { FC } from 'react';
import { DeliveryList } from '.';

interface Props {
    deliveriesOnCourse: IDelivery[];
}

const DeliveryOnCourse: FC<Props> = ({ deliveriesOnCourse }) => {
    return (
        <>
            {!deliveriesOnCourse ? (
                <div className='flex justify-center'>
                    <div className='text-center text-red-500'>
                        You have no deliveries on course
                    </div>
                </div>
            ) : (
                <DeliveryList deliveries={deliveriesOnCourse} />
            )}
        </>
    );
};

export default DeliveryOnCourse;
