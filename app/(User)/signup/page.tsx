import { GeneralCard } from '@components/ui/cards';
import React, { FC } from 'react';
import { SignupForm } from '../../../components/ui/forms/ SignupForm';

const InitWorkDay: FC = () => {
    return (
        <div>
            <GeneralCard title='Create your account'>
                <SignupForm />
            </GeneralCard>
        </div>
    );
};

export default InitWorkDay;
