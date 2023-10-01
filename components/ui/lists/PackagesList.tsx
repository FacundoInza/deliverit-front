'use client';

import { IOrder } from '@/interfaces';
import React, { FC, useEffect } from 'react';
import { SelectPackages } from '../select-packages';
import { useDispatch } from 'react-redux';
import { refreshPackagesSelected } from '@/redux/features/packages/packagesSlice';

interface Props {
    packages: IOrder[];
}

const PackagesList: FC<Props> = ({ packages }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshPackagesSelected());
    }, []);

    return (
        <>
            {packages.map((pack, i) => (
                <SelectPackages key={i} pack={pack} />
            ))}
        </>
    );
};

export default PackagesList;
