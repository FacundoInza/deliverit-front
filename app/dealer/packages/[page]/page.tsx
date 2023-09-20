import React, { FC } from 'react';

import { GeneralCard } from '@/components/ui/cards/GeneralCard';
import MainButton from '@/components/commons/buttons/MainButton';
import { getOrders } from '@/adapters/orderAdapters';
import { IOrder, ResponsePaginated } from '@/interfaces';
import { SelectPackages } from '@/components/ui/select-packages';
import Pagination from '@/components/commons/pagination/Pagination';

interface Props {
    params: {
        page: string;
    };
}

const InitWorkDay: FC<Props> = async ({ params }) => {
    const { data, totalPages }: ResponsePaginated<IOrder> = await getOrders({
        status: 'unassigned',
        page: Number(params.page),
    });

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
                {data &&
                    data.map((pack, i) => (
                        <SelectPackages key={i} pack={pack} />
                    ))}
                {totalPages > 1 && (
                    <div className='flex justify-center mt-4'>
                        <Pagination
                            currentPage={Number(params.page)}
                            totalPages={totalPages}
                        />
                    </div>
                )}
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
