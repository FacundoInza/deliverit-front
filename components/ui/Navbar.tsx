import React, { FC } from 'react';

interface Props {
    isAuthenticated: boolean;
}

const Navbar: FC<Props> = ({ isAuthenticated }) => {
    return (
        <>
            <div
                className='flex justify-between py-4 px-6 md:px-40 '
                style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
            >
                <a href='/' className='text-2xl font-bold'>
                    <img
                        src='https://i.imgur.com/Q3x7uc9.jpg'
                        alt='Logo'
                        className='h-8'
                    />
                </a>
                {isAuthenticated && (
                    <div
                        className='h-8 w-25'
                        style={{
                            borderRadius: 5,
                            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                        }}
                    >
                        <img
                            src='https://i.imgur.com/CtZI162.png'
                            alt='Logo'
                            className='h-8'
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
