import React, { FC } from 'react';
import { GeneralCard } from '../../../components/ui/cards/GeneralCard';
import DeliveryInProgressCard from '../../../components/ui/cards/DeliveryInProgressCard';
import MainButton from '../../../components/commons/buttons/MainButton';

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
