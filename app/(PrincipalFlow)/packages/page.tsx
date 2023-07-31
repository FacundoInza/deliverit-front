'use client';

import React, { FC } from 'react';
import { GeneralCard } from '../../../components/ui/generalCard';
import { SelectPackages } from '../../../components/ui/select-packages';
import { useAppSelector } from '../../../hooks/useAppSelector';

const InitWorkDay: FC = () => {
    const { allPackages } = useAppSelector((state) => state.packages);

    return (
        <GeneralCard title='Get packages'>
            <h2 className='text-primary text-center'>
                How many packages will you deliver today?
            </h2>
            <div
                className='border-primary'
                style={{
                    borderTop: '2px dotted',
                    borderSpacing: '10px',
                    margin: 10,
                }}
            ></div>
            {allPackages.map((pack, i) => (
                <SelectPackages key={i} pack={pack} />
            ))}
        </GeneralCard>
    );
};

export default InitWorkDay;
