'use client';

import React, { FC } from 'react';

import { SelectPackages } from '../../../components/ui/select-packages';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { GeneralCard } from '../../../components/ui/cards/GeneralCard';
import MainButton from '@components/commons/buttons/MainButton';

const InitWorkDay: FC = () => {
    const { allPackages } = useAppSelector((state) => state.packages);

    return (
        <>
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

            <div
                style={{
                    width: '380px',
                    padding: '20px',
                    margin: 'auto',
                }}
            >
                <MainButton text='Start Day' btnGreen />
            </div>
        </>
    );
};

export default InitWorkDay;
