import React, { FC } from 'react';

import { GeneralCard } from '@/components/ui/cards';
import { SignupForm } from '@/components/ui/forms';

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
