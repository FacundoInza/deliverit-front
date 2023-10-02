import currentEnv from '@/config';
import { deleteCookie } from 'cookies-next';

import { jwtVerify } from 'jose';

export const validateToken = async (token: string) => {
    try {
        const key = new TextEncoder().encode(currentEnv.ACCESS_TOKEN_SECRET);

        const { payload } = await jwtVerify(token, key, {
            algorithms: ['HS256'], // Specify the algorithm you are using
        });

        return payload;
    } catch (error) {
        deleteCookie('token');
        return null;
    }
};
