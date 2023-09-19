'use client';

import React, { FC, useState } from 'react';

import Link from 'next/link';
import { GeneralCard } from '@/components/ui/cards/GeneralCard';
import { SwornStatementCard } from '@/components/ui/cards/SwornStatementCard';
import MainButton from '@/components/commons/buttons/MainButton';

const SwornStatement: FC = () => {
    const questions = [
        'Have you consumed alcoholic beverages in the last 24 hours?',
        'Have you been taking any type of psychoactive mediacation?',
        'Do you have any family, emotional or any type of problem that may distract you?',
    ];

    type SelectedAnswers = Record<number, string | null>;

    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});

    const handleAnswerSelect = (index: number, answer: string) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [index]: answer,
        }));
    };

    return (
        <>
            <div style={{ height: '75vh' }}>
                <GeneralCard title='Sworn statement'>
                    <div>
                        {questions.map((question, index) => (
                            <SwornStatementCard
                                question={question}
                                selectedAnswer={selectedAnswers[index] || null}
                                onSelectAnswer={(answer) =>
                                    handleAnswerSelect(index, answer)
                                }
                                key={index}
                            />
                        ))}
                    </div>
                    <Link href='/dealer/home'>
                        <div className='flex justify-center mt-4 w-72 m-auto'>
                            <MainButton text={'Continue'} btnGreen={true} />
                        </div>
                    </Link>
                </GeneralCard>
            </div>
        </>
    );
};
export default SwornStatement;
