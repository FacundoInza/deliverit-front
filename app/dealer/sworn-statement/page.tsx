'use client';

import React, { FC, useState } from 'react';
import { GeneralCard } from '@/components/ui/cards/GeneralCard';
import { SwornStatementCard } from '@/components/ui/cards/SwornStatementCard';
import { api } from '@/api/axiosInstance';
import { GreenButton } from '@/components/commons/buttons/GreenFormButton';

const SwornStatement: FC = () => {
    const questions = [
        'Have you consumed alcoholic beverages in the last 24 hours?',
        'Have you been taking any type of psychoactive mediacation?',
        'Do you have any family, emotional or any type of problem that may distract you?',
    ];

    type SelectedAnswers = {
        alcoholicBeverages?: boolean;
        psychoactiveMedication?: boolean;
        familyProblem?: boolean;
        [index: number]: boolean | undefined;
    };

    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});

    console.log('THESE ARE THE ANSWERS', selectedAnswers);

    const questionKeyMapping: Record<number, keyof SelectedAnswers> = {
        0: 'alcoholicBeverages',
        1: 'psychoactiveMedication',
        2: 'familyProblem',
    };

    const handleAnswerSelect = (index: number, answer: boolean) => {
        const key = questionKeyMapping[index];
        setSelectedAnswers((prev) => ({
            ...prev,
            [key]: answer,
        }));
    };

    const allQuestionsAnswered = () => {
        return (
            selectedAnswers.alcoholicBeverages !== undefined &&
            selectedAnswers.psychoactiveMedication !== undefined &&
            selectedAnswers.familyProblem !== undefined
        );
    };

    const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { alcoholicBeverages, psychoactiveMedication, familyProblem } =
            selectedAnswers;
        const response = await api.post('/api/sworn', {
            alcoholicBeverages,
            psychoactiveMedication,
            familyProblem,
        });
        console.log('THIS IS THE RESPONSE', response);
    };

    return (
        <>
            <div style={{ height: '75vh' }}>
                <GeneralCard title='Sworn statement'>
                    <form onSubmit={handleSumbit}>
                        <div>
                            {questions.map((question, index) => (
                                <SwornStatementCard
                                    question={question}
                                    selectedAnswer={
                                        selectedAnswers[
                                            questionKeyMapping[index]
                                        ]
                                    }
                                    onSelectAnswer={(answer) =>
                                        handleAnswerSelect(index, answer)
                                    }
                                    key={index}
                                />
                            ))}
                        </div>
                        {/* <Link href='/dealer/home'> */}
                        <div className='flex justify-center mt-4 w-72 m-auto'>
                            <GreenButton
                                disabled={!allQuestionsAnswered()}
                                text={'Continue'}
                                btnGreen={true}
                            />
                        </div>
                        {/* </Link> */}
                    </form>
                </GeneralCard>
            </div>
        </>
    );
};
export default SwornStatement;
