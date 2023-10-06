import currentEnv from '@/config';
import axios from 'axios';
import { getCookie } from 'cookies-next';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || currentEnv.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = getCookie('token');

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

function handleNetworkErrors(error: Error) {
    console.error('Error de red:', error.message);
    return Promise.reject(error);
}

api.interceptors.response.use(null, handleNetworkErrors);
