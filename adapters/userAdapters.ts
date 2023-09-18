import { axiosInstance } from '@/interceptors';

export async function userAuth() {
    const response = await axiosInstance.post('/api/user/me');

    if (response.status !== 200) {
        throw new Error('No se pudo obtener la información del usuario');
    }

    return response.data;
}
