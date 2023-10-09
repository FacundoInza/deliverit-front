import React, { FC } from 'react';
import { GeneralCard } from '@/components/ui/cards/GeneralCard';
import { getOrders } from '@/adapters/orderAdapters';
import { IOrder, ResponsePaginated } from '@/interfaces';
import Pagination from '@/components/commons/pagination/Pagination';
import ButtonStartDay from '@/components/commons/buttons/ButtonStartDay';
import { getUserFromServer } from '@/adapters';
import PackagesList from '@/components/ui/lists/PackagesList';

interface Props {
    params: {
        page: string;
    };
}

const InitWorkDay: FC<Props> = async ({ params }) => {
    const user = await getUserFromServer();

    const { data, totalPages }: ResponsePaginated<IOrder> = await getOrders({
        status: 'unassigned',
        page: Number(params.page),
    });

    const isUserBlocked =
        user.blockUntil && new Date(user.blockUntil) > new Date();

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
                {data.length > 0 ? (
                    <PackagesList packages={data} />
                ) : (
                    <div className='text-center text-red-500'>
                        There are no packages available for today
                    </div>
                )}

                {totalPages > 1 && (
                    <div className='flex justify-center mt-4'>
                        <Pagination
                            currentPage={Number(params.page)}
                            totalPages={totalPages}
                        />
                    </div>
                )}
            </GeneralCard>

            <ButtonStartDay
                blockUntil={user.blockUntil}
                isBlocked={isUserBlocked}
                enabled={user.enabled}
                emptyData={data.length === 0}
            />
        </>
    );
};

export default InitWorkDay;
