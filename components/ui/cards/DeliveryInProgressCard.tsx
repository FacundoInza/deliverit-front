import React, { FC } from 'react';

import MainButton from '../../commons/buttons/MainButton';
import { GeneralCard } from './GeneralCard';
import { axiosInstance } from '@/interceptors';
import LocationMap from '../locationMap/LocationMap';

const fetchOrder = async (id: string) => {
    const orderDetails = await axiosInstance.get(`/api/order/${id}`);
    return orderDetails.data;
};

const DeliveryInProgressCard: FC<{ id: string }> = async ({ id }) => {
    const order = await fetchOrder(id);
    console.log('THIS IS ORDER---->', order);

    return (
        <>
            <GeneralCard title='Delivery In Progress'>
                <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 '>
                    <div className=' mt-0 sm:mx-auto sm:w-full sm:max-w-sm '>
                        <div className='border-primary border'>
                            <div className='w-full h-48 sm:h-56'>
                                <LocationMap coords={order.coords} />
                            </div>
                        </div>
                        <div className='mt-8'>
                            <p className='text-primary font-poppins font-bold text-sm leading-5'>
                                Destino:{' '}
                                <span className='text-blue-900 font-poppins font-normal text-sm leading-5'>
                                    {order.address}
                                </span>
                            </p>

                            <p className='text-primary font-poppins font-bold text-sm leading-5'>
                                Recibe:{' '}
                                <span className='font-normal'>
                                    {' '}
                                    {order.recipient}{' '}
                                </span>
                            </p>
                            <p className='text-primary font-poppins font-bold text-sm leading-5'>
                                Cantidad de paquetes:{' '}
                                <span className='font-normal'>
                                    {order.packagesQuantity}
                                </span>
                            </p>
                            <p className='text-primary font-poppins font-bold text-sm leading-5'>
                                Número de paquete:{' '}
                                <span className='font-normal'>{order._id}</span>
                            </p>
                            <div className='mt-8 '>
                                <MainButton text='Finish' btnGreen />
                            </div>
                        </div>
                    </div>
                </div>
            </GeneralCard>
            <div className='mt-8  mx-auto flex button-container w-72'>
                <MainButton text='Cancel Delivery' btnBlue />
            </div>
        </>
    );
};

export default DeliveryInProgressCard;
