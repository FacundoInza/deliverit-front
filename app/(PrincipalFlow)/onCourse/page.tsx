import React, { FC } from 'react';
import DeliveryInProgressCard from '../../../components/ui/deliveryInProgressCard/DeliveryInProgressCard';
import { GeneralCard } from '@components/ui/generalCard/GeneralCard';
import MainButton from '@components/commons/buttons/MainButton';

const InitWorkDay: FC = () => {
    return (
        <div>
            <GeneralCard title='Delivery In Progress'>
                <DeliveryInProgressCard />
            </GeneralCard>

            <div className='mt-8  mx-auto flex button-container w-72'>
                <MainButton text='Cancel Delivery' btnBlue />
            </div>
        </div>
    );
};

export default InitWorkDay;
