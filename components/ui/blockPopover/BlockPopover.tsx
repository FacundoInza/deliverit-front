import React, { FC } from 'react';

interface Props {
    blockUntil: Date | null;
}

export const BlockPopover: FC<Props> = ({ blockUntil }) => {
    const blockReason = 'Your account is currently blocked.';
    const timeRemaining = blockUntil
        ? `Block will be lifted at: ${new Date(blockUntil)}`
        : '';
    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='w-48 bg-white border border-gray-300 rounded shadow-lg'>
                <div className='py-2 text-gray-700 text-sm'>
                    <div className='flex items-center px-4'>
                        <span>{blockReason}</span>
                    </div>
                    <div className='flex items-center px-4'>
                        <span>{timeRemaining}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
