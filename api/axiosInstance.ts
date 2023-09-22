import currentEnv from '@/config';
import axios from 'axios';

export const api = axios.create({
    baseURL: currentEnv.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `${token}`;
    }
    return config;
});

// api.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (error.response.status === 401) {
//             localStorage.removeItem('token');
//             window.location.href = '/';
//         }
//         return Promise.reject(error);
//     }
// );
