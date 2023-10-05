import { axiosInstance } from '@/interceptors';
import { IUser } from '@/interfaces/IUser';
import { validateToken } from '@/utils';
import { cookies } from 'next/dist/client/components/headers';

const userEmpty: IUser = {
    blockUntil: null,
    email: '',
    enabled: false,
    id: '',
    lastSeenAt: new Date(),
    lastName: '',
    name: '',
    numberOfPacakagesPerDay: 0,
    role: '',
    urlImage: '',
};

export async function userAuth() {
    const response = await axiosInstance.post('/api/user/me');

    if (response.status !== 200) {
        throw new Error('No se pudo obtener la información del usuario');
    }

    return response.data;
}

function isValidUser(user: any): user is IUser {
    return (
        typeof user === 'object' &&
        'id' in user &&
        'name' in user &&
        'lastName' in user &&
        'role' in user &&
        'enabled' in user &&
        'lastSeenAt' in user &&
        'blockUntil' in user &&
        'numberOfPacakagesPerDay' in user &&
        'urlImage' in user
    );
}

export async function getUserFromServer(): Promise<IUser> {
    const token = cookies().get('token');

    const payload = await validateToken(token?.value as string);

    if (!payload || !isValidUser(payload.user)) {
        return userEmpty;
    }

    const user: IUser = {
        id: payload.user.id,
        email: payload.user.email,
        name: payload.user.name,
        lastName: payload.user.lastName,
        role: payload.user.role,
        enabled: payload.user.enabled,
        lastSeenAt: payload.user.lastSeenAt,
        blockUntil: payload.user.blockUntil,
        numberOfPacakagesPerDay: payload.user.numberOfPacakagesPerDay,
        urlImage: payload.user.urlImage,
    };

    return user;
}
