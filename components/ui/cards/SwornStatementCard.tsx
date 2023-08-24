'use client';

import React from 'react';

interface SwornStatementCardProps {
    question: string;
    selectedAnswer: string | null;
    onSelectAnswer: (answer: string) => void;
}

export const SwornStatementCard: React.FC<SwornStatementCardProps> = ({
    question,
    selectedAnswer,
    onSelectAnswer,
}) => {
    return (
        <div className='bg-white border border-primary rounded-2xl p-1 flex flex-col space-x-2 text-primary mb-2'>
            <p className='text-center'>{question}</p>
            <div className='flex justify-around md:justify-center md:gap-4 mt-2'>
                <button
                    className={`rounded-2xl py-1 px-4 border-2 border-secondary ${
                        selectedAnswer === 'yes' ? 'bg-gray-300' : ''
                    }`}
                    onClick={() => onSelectAnswer('yes')}
                >
                    Yes
                </button>
                <button
                    className={`rounded-2xl py-1 px-4 border-2 border-secondary ${
                        selectedAnswer === 'no' ? 'bg-gray-300' : ''
                    }`}
                    onClick={() => onSelectAnswer('no')}
                >
                    No
                </button>
            </div>
        </div>
    );
};
