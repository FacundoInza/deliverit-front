import { axiosInstance } from '@/interceptors';
import { validateToken } from '@/utils';
import { cookies } from 'next/dist/client/components/headers';

export async function userAuth() {
    const response = await axiosInstance.post('/api/user/me');

    if (response.status !== 200) {
        throw new Error('No se pudo obtener la información del usuario');
    }

    return response.data;
}

export async function getUser() {
    const token = cookies().get('token');

    const payload = await validateToken(token?.value as string);

    if (!payload) {
        throw new Error('No se pudo obtener el token');
    }

    return payload.user;
}
