import { axiosInstance } from '@/interceptors';
import { FilterDelivery, IDelivery, ResponsePaginated } from '@/interfaces';

export async function getDeliveries({
    status,
}: FilterDelivery): Promise<ResponsePaginated<IDelivery>> {
    const response = await axiosInstance.get(
        `/api/delivery/all?status=${status}`
    );

    if (response.status !== 200) {
        throw new Error('No se pudo obtener la información del usuario');
    }

    return response.data;
}
