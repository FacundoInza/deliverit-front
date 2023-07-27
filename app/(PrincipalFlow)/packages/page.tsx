import React, { FC } from 'react';
import { DropdownCard } from '../../../components/ui/dropdownCard/DropdownCard';
import { GeneralCard } from '../../../components/ui/generalCard/GeneralCard';

const InitWorkDay: FC = () => {
    return (
        <>
            <DropdownCard title={'title'} subtitle={'subtitle'}>
                <li className='flex'>shipment 6</li>
                <li className='flex'>shipment 7</li>
                <li className='flex'>shipment 8</li>
                <li className='flex'>shipment 9</li>
                <li className='flex'>shipment 10</li>
            </DropdownCard>
            <GeneralCard title={'title'}>
                <p className='text-gray-800 text-base'>TEST</p>
                <p className='text-gray-800 text-base'>TEST</p>
                <p className='text-gray-800 text-base'>TEST</p>
                <p className='text-gray-800 text-base'>TEST</p>
            </GeneralCard>
        </>
    );
};

export default InitWorkDay;
