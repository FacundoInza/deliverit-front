import React, { FC, useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '@/hooks';
import { useAppSelector } from '../../../hooks/useAppSelector';
import {
    addOrderSelected,
    removeOrderSelected,
} from '@/redux/features/packages/packagesSlice';
import Notification from '@/components/ui/modal/Notification';
import { FaMapLocationDot } from 'react-icons/fa6';
import MapModal from '@/components/ui/modal/MapModal';

interface Props {
    packagesQuantity: number;
    orderId: string;
    address: string;
    coords: {
        lat: number;
        lng: number;
    };
}

export const ItemCheckbox: FC<Props> = ({
    packagesQuantity,
    orderId,
    address,
    coords,
}) => {
    const dispatch = useAppDispatch();
    const { ordersSelected } = useAppSelector((state) => state.packages);

    useEffect(() => {
        const alreadySelected = ordersSelected.some(
            (order) => order.orderId === orderId
        );
        setIsSelected(alreadySelected);
        setIsLoading(false);
    }, [ordersSelected]);

    const [isLoading, setIsLoading] = useState(ordersSelected ? true : false);
    const [isSelected, setIsSelected] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showMapModal, setShowMapModal] = useState(false);

    const { totalPackages } = useAppSelector((state) => state.packages);

    const handleCheckboxChange = () => {
        if (isSelected) {
            setIsSelected(false);
            dispatch(
                removeOrderSelected({
                    orderId: orderId,
                    packagesQuantity: packagesQuantity,
                })
            );
        } else {
            if (totalPackages + packagesQuantity <= 10) {
                setIsSelected(true);
                dispatch(
                    addOrderSelected({
                        orderId: orderId,
                        packagesQuantity: packagesQuantity,
                    })
                );
            } else {
                setShowModal(true);
            }
        }
    };

    const handleMapIconClick = useCallback(() => {
        setShowMapModal(true);
    }, []);

    const truncatedAddress =
        address.length > 30 ? `${address.substring(0, 30)}...` : address;

    return (
        <>
            {isLoading ? (
                <label className='flex items-center cursor-pointer select-none w-full group'>
                    <div className='h-5 w-5 bg-gray-300 animate-pulse'></div>
                    <div className='ml-2'>
                        <div className='h-3 w-20 bg-gray-300 animate-pulse'></div>
                        <div className='h-3 w-16 bg-gray-300 animate-pulse'></div>
                    </div>
                </label>
            ) : (
                <label className='flex items-center cursor-pointer select-none w-full group'>
                    <input
                        type='checkbox'
                        checked={isSelected}
                        onChange={handleCheckboxChange}
                        className='opacity-0 absolute h-0 w-0'
                    />
                    <div
                        className={`relative h-4 w-4 border border-blue-500 rounded checkmark ${
                            isSelected ? 'bg-green-200' : ''
                        }`}
                    >
                        <svg
                            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                                isSelected ? '' : 'hidden'
                            }`}
                            width='10'
                            height='8'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M1 4L3.5 6L9 1'
                                stroke='#22577A'
                                strokeWidth='2'
                            />
                        </svg>
                    </div>
                    <div className='ml-2 flex items-center relative'>
                        <p className='text-sm text-primary md:hidden'>
                            {truncatedAddress}
                        </p>
                        <p className='hidden md:inline text-sm text-primary'>
                            {address}
                        </p>
                        <div className='absolute -top-10 left-0 text-primary text-sm z-50 mt-8 w-64 bg-white border border-gray-300 rounded-md shadow-lg p-2 opacity-0 group-hover:opacity-100 md:group-hover:opacity-0 transition-opacity duration-200'>
                            {address}
                            <button
                                onClick={handleMapIconClick}
                                className='ml-2 mr-2 text-primary align-text-bottom md:hidden'
                            >
                                <FaMapLocationDot size={20} />
                            </button>
                        </div>
                        <button
                            onClick={handleMapIconClick}
                            className='ml-2 mr-2 text-primary hidden md:inline-block' // hidden on small screens
                        >
                            <FaMapLocationDot size={20} />
                        </button>
                    </div>
                    {/* <div className='ml-2 flex items-center relative'>
                        <p className='text-sm text-primary md:hidden'>
                            {truncatedAddress}
                        </p>
                        <p className='hidden md:inline text-sm text-primary'>
                            {address}
                        </p>
                        <button
                            onClick={handleMapIconClick}
                            className='ml-2 mr-2 text-primary'
                        >
                            <FaMapLocationDot size={20} />
                        </button>
                        <div className='absolute -top-10 left-0 text-primary text-sm z-50 mt-8 w-64 bg-white border border-gray-300 rounded-md shadow-lg p-2 opacity-0 group-hover:opacity-100 md:group-hover:opacity-0 transition-opacity duration-200'>
                            {address}
                        </div>
                    </div> */}
                </label>
            )}

            <Notification
                showModal={showModal}
                isSuccess={false}
                message='You can only select up to 10 packages'
                onNotSuccess={() => setShowModal(false)}
                onCloseModal={() => setShowModal(false)}
                singleButton={true}
                buttonText='Ok'
            />
            <MapModal
                showModal={showMapModal}
                onClose={() => setShowMapModal(false)}
                coords={coords}
                address={address}
                directions={true}
            />
        </>
    );
};
