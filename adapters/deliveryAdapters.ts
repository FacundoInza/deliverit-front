import { axiosInstance } from '@/interceptors';
import { ResponseDeliveries } from '@/interfaces';

interface FilterDelivery {
    status: string;
}

export async function getDeliveries({
    status,
}: FilterDelivery): Promise<ResponseDeliveries> {
    const response = await axiosInstance.get(
        `/api/delivery/all?status=${status}`
    );

    if (response.status !== 200) {
        throw new Error('No se pudo obtener la información del usuario');
    }

    return response.data;
}
