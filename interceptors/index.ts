import axios from 'axios';
import { getCookie } from 'cookies-next';

// Interceptor para agregar un token de autenticación a las solicitudes
function addAuthTokenToRequest(config: any) {
    const token = getCookie('token');

    console.log('token', token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

// Interceptor para manejar errores de red
function handleNetworkErrors(error: Error) {
    console.error('Error de red:', error.message);
    return Promise.reject(error);
}

// Configuración de Axios con los interceptores
export const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(addAuthTokenToRequest);
axiosInstance.interceptors.response.use(null, handleNetworkErrors);
