import React, { FC } from 'react';
import SimpleLocationMap from '../locationMap/SimpleLocationMap';

interface MapModalProps {
    showModal: boolean;
    onClose: () => void;
    coords: {
        lat: number;
        lng: number;
    };
    address: string;
}

const MapModal: FC<MapModalProps> = ({
    showModal,
    onClose,
    coords,
    address,
}) => {
    return (
        <>
            {showModal && (
                <div
                    className='fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm'
                    onClick={onClose}
                >
                    <div
                        className='bg-white mx-3 p-4 md:p-8 w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 rounded-lg shadow-2xl'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='w-full h-64 sm:h-80'>
                            <SimpleLocationMap
                                coords={coords}
                                address={address}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MapModal;
