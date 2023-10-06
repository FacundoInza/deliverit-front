import React, { FC, useRef } from 'react';
import Webcam from 'react-webcam';
import { CameraInputProps } from '../../../interfaces/IForms';
import { RiCameraLine, RiArrowGoBackLine } from 'react-icons/ri';

const CameraInput: FC<CameraInputProps> = ({ onCapture, onClose }) => {
    const webcamRef = useRef<Webcam>(null);

    const capture = () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            onCapture(imageSrc);
        }
    };

    return (
        <div className='relative'>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat='image/jpeg'
                width={500}
                height={500}
                videoConstraints={{
                    facingMode: 'user',
                }}
            />
            <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50'>
                <button onClick={capture}>
                    <RiCameraLine size={30} color='white' />
                </button>
                <button onClick={onClose}>
                    <RiArrowGoBackLine size={30} color='white' />
                </button>
            </div>
        </div>
    );
};

export default CameraInput;
