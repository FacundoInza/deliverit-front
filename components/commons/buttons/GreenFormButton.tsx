import React from 'react';
import MainButton, { ButtonProps } from './MainButton';

interface GreenButtonProps extends ButtonProps {
    disabled: boolean;
}

export const GreenButton = ({
    text,
    onClick,
    disabled = false,
}: GreenButtonProps) => {
    return (
        <MainButton
            text={text}
            onClick={onClick}
            btnGreen={true}
            disabled={disabled}
        />
    );
};
