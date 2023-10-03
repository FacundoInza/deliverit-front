import React, { FC } from 'react';
import { GeneralCard } from './GeneralCard';
import { axiosInstance } from '@/interceptors';
import LocationMap from '../locationMap/LocationMap';
import dynamic from 'next/dynamic';

const fetchDelivery = async (id: string) => {
    const deliveryDetails = await axiosInstance.get(`/api/delivery/${id}`);
    return deliveryDetails.data;
};

const DeliveryInProgressCard: FC<{ id: string }> = async ({ id }) => {
    const delivery = await fetchDelivery(id);

    const coords = {
        lat: delivery.data.orderId.coords.lat,
        lng: delivery.data.orderId.coords.lng,
    };

    const StartInteractiveButtons = dynamic(
        () => import('../../commons/buttons/StartInteractiveButtons'),
        { ssr: false }
    );

    const CancelInteractiveButtons = dynamic(
        () => import('../../commons/buttons/CancelInteractiveButtons'),
        { ssr: false }
    );

    const calculateDuration = (start: string, end: string) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const duration = (endDate.getTime() - startDate.getTime()) / 1000;
        return `${Math.floor(duration / 60)} minutes and ${
            duration % 60
        } seconds`;
    };

    return (
        <>
            <GeneralCard
                title={
                    delivery.data.status === 'on-course'
                        ? 'Delivery in Progress'
                        : delivery.data.status === 'delivered'
                        ? 'Delivery Completed'
                        : 'Delivery Details'
                }
            >
                <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8 '>
                    <div className=' mt-0 sm:mx-auto sm:w-full sm:max-w-sm '>
                        {delivery.data.status !== 'delivered' && (
                            <div className='border-primary border'>
                                <div className='w-full h-64 sm:h-80'>
                                    <LocationMap coords={coords} />
                                </div>
                            </div>
                        )}
                        {delivery.data.status === 'delivered' && (
                            <p className='text-primary font-poppins font-bold text-sm leading-5'>
                                Delivery Duration:{' '}
                                <span className='font-normal'>
                                    {calculateDuration(
                                        delivery.data.startingDeliveryDate,
                                        delivery.data.resolutionDeliveryDate
                                    )}
                                </span>
                            </p>
                        )}
                        <div className='mt-8'>
                            <p className='text-primary font-poppins font-bold text-sm leading-5'>
                                Destination:{' '}
                                <span className='text-blue-900 font-poppins font-normal text-sm leading-5'>
                                    {delivery.data.orderId.address}
                                </span>
                            </p>

                            <p className='text-primary font-poppins font-bold text-sm leading-5'>
                                Recipient:{' '}
                                <span className='font-normal'>
                                    {' '}
                                    {delivery.data.orderId.recipient}{' '}
                                </span>
                            </p>
                            <p className='text-primary font-poppins font-bold text-sm leading-5'>
                                Number of packages:{' '}
                                <span className='font-normal'>
                                    {delivery.data.orderId.packagesQuantity}
                                </span>
                            </p>
                            <p className='text-primary font-poppins font-bold text-sm leading-5'>
                                Package ID:{' '}
                                <span className='font-normal'>
                                    {delivery.data.orderId._id}
                                </span>
                            </p>
                            {delivery.data.status !== 'delivered' && (
                                <div className='mt-8 '>
                                    <StartInteractiveButtons
                                        delivery={delivery}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </GeneralCard>

            <div className=' ml-4 mr-4 md:mx-32 relative'>
                <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8 '>
                    <div className=' mt-0 sm:mx-auto sm:w-full sm:max-w-sm '>
                        {delivery.data.status !== 'delivered' && (
                            <div className='px-4 py-6'>
                                <CancelInteractiveButtons delivery={delivery} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeliveryInProgressCard;
