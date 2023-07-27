import React, { FC, ReactNode } from 'react';

interface Props {
    icon: ReactNode;
    handleClick?: () => void;
}

export const IconButton: FC<Props> = ({ icon, handleClick }) => {
    return (
        <span className={'text-indigo-600 text-lg'} onClick={handleClick}>
            {icon}
        </span>
    );
};
