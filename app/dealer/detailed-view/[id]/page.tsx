import React, { FC } from 'react';
import DeliveryInProgressCard from '@/components/ui/cards/DeliveryInProgressCard';

interface Props {
    params: {
        id: string;
    };
}

const InitWorkDay: FC<Props> = ({ params }) => {
    return <DeliveryInProgressCard id={params.id} />;
};
export default InitWorkDay;
