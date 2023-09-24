'use client';
import React from 'react';
import classNames from 'classnames';

export interface ButtonProps {
    text: string;
    onClick?: () => void;
    btnGreen?: boolean;
    btnBlue?: boolean;
    disabled?: boolean;
}

const MainButton: React.FC<ButtonProps> = ({
    text,
    onClick,
    btnGreen,
    btnBlue,
    disabled = false,
}) => {
    const buttonClasses = classNames(
        'text-info',
        'h-7.5',
        'w-full',
        'p-2',
        'rounded-full',
        'font-feature-settings: "clig" off, "liga" off',
        'text-sm',
        'font-bold',
        'leading-6',
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'self-stretch',
        {
            'text-primary': btnGreen,
            'bg-secondary': btnGreen,
            'hover:bg-primary': btnGreen && !disabled,
            'hover:text-info': btnGreen && !disabled,
            'hover:border': btnGreen && !disabled,
            'hover:border-solid': btnGreen && !disabled,
            'hover:border-secondary': btnGreen && !disabled,
            'hover:border-1': btnGreen && !disabled,
        },
        {
            'text-info': btnBlue,
            'bg-primary': btnBlue,
            border: btnBlue,
            'border-solid': btnBlue,
            'border-secondary': btnBlue,
            'border-1': btnBlue,
            'hover:bg-secondary': btnBlue && !disabled,
            'hover:text-primary': btnBlue && !disabled,
        },
        {
            'opacity-50 cursor-not-allowed': disabled,
        }
    );

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            disabled={disabled}
            className={buttonClasses}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default MainButton;
