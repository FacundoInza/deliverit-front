'use client';

import React, { FC, useState } from 'react';
import { GeneralCard } from '@/components/ui/cards/GeneralCard';
import { SwornStatementCard } from '@/components/ui/cards/SwornStatementCard';
import { api } from '@/api/axiosInstance';
import { GreenButton } from '@/components/commons/buttons/GreenFormButton';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/features/user/userSlice';
import { AxiosError } from 'axios';
import Notification from '@/components/ui/modal/Notification';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

type SelectedAnswers = {
    alcoholicBeverages?: boolean;
    psychoactiveMedication?: boolean;
    familyProblem?: boolean;
    [index: number]: boolean | undefined;
};

interface ErrorResponse {
    message: string;
}

const SwornStatement: FC = () => {
    const questions = [
        'Have you consumed alcoholic beverages in the last 24 hours?',
        'Have you been taking any type of psychoactive mediacation?',
        'Do you have any family, emotional or any type of problem that may distract you?',
    ];

    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isModalSuccess, setIsModalSuccess] = useState(false);

    const dispatch = useDispatch();
    const router = useRouter();

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

        try {
            const response = await api.post('/api/sworn', {
                alcoholicBeverages,
                psychoactiveMedication,
                familyProblem,
            });

            const token = response.headers['authorization'];
            setCookie('token', token.slice(7));
            localStorage.setItem('token', token.slice(7));
            dispatch(setUser(response.data.user));

            if (response.data.success) {
                setModalMessage(
                    'You are allowed to start your journey. Remember you need to complete the form again at the end of the day.'
                );
                setIsModalSuccess(true);
                setShowModal(true);
            } else {
                setModalMessage(
                    `You are not allowed to start your journey until ${new Date(
                        response.data.user.blockUntil
                    )}. Please contact your supervisor.`
                );
                setIsModalSuccess(false);
                setShowModal(true);
            }
        } catch (error) {
            console.log('THIS IS THE ERROR', error);
            const axiosError = error as AxiosError<ErrorResponse>;
            if (axiosError && axiosError.response) {
                setModalMessage(axiosError.response.data.message);
            } else {
                setModalMessage((error as Error).message);
            }

            setIsModalSuccess(false);
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        if (isModalSuccess) {
            router.push('/dealer/home');
        } else {
            router.push('/dealer/sworn-statement');
        }
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

                        <div className='flex justify-center mt-4 w-72 m-auto'>
                            <GreenButton
                                disabled={!allQuestionsAnswered()}
                                text={'Continue'}
                                btnGreen={true}
                            />
                        </div>
                    </form>
                </GeneralCard>
            </div>

            <Notification
                showModal={showModal}
                isSuccess={isModalSuccess}
                message={modalMessage}
                onSuccess={handleCloseModal}
                onClose={() => setShowModal(false)}
                buttonText={isModalSuccess ? 'Continue' : 'Close'}
                singleButton={true}
            />
        </>
    );
};
export default SwornStatement;
