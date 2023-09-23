import React, { ChangeEvent, useRef, useState } from 'react';
import { ProfilePhotoEditorProps } from '../../../interfaces/IForms';
import CameraInput from './CameraInput';
import { CircularImage } from '../../commons/circular-image/CircularImage';
import { MdAddAPhoto, MdOutlineDriveFolderUpload } from 'react-icons/md';

export function ProfilePhotoEditor({
    defaultImageSrc,
    alt,
    diameter,
    onImageChange,
}: ProfilePhotoEditorProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(defaultImageSrc);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handlePhotoCapture = (imageSrc: string | null) => {
        if (imageSrc) {
            setCurrentPhoto(imageSrc);
            onImageChange(imageSrc);
            setIsModalOpen(false);
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                const imageSrc = reader.result as string;
                onImageChange(imageSrc);
                setCurrentPhoto(imageSrc);
            };
        }
    };

    const openFilePicker = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div>
            <div className='relative'>
                <CircularImage
                    src={currentPhoto}
                    alt={alt}
                    diameter={diameter}
                />
                <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-36'>
                    <button type='button' onClick={openFilePicker}>
                        <MdOutlineDriveFolderUpload size={30} color='#22577A' />
                    </button>
                    <button type='button' onClick={() => setIsModalOpen(true)}>
                        <MdAddAPhoto size={30} color='#22577A' />
                    </button>
                    <input
                        type='file'
                        accept='image/*'
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        hidden
                    />
                </div>
            </div>

            {isModalOpen && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50'>
                    <div className='flex justify-center bg-white p-4 rounded shadow-lg w-3/4 max-w-lg'>
                        <CameraInput
                            onCapture={handlePhotoCapture}
                            onClose={() => {
                                setIsModalOpen(false);
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
