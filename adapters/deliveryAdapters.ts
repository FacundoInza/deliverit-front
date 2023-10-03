import { api } from '@/api/axiosInstance';
import { axiosInstance } from '@/interceptors';
import { FilterDelivery, IDelivery, ResponsePaginated } from '@/interfaces';
import { IOrderSelected } from '@/redux/features/packages/packagesSlice';

export async function getDeliveries({
    status,
    userId,
}: FilterDelivery): Promise<ResponsePaginated<IDelivery>> {
    console.log('userId -> getDeliveries', userId);
    const response = await axiosInstance.get(
        `/api/delivery/all?status=${status}&userId=${userId}`
    );

    return response.data;
}

export async function deleteDelivery(id: string): Promise<void> {
    const response = await axiosInstance.delete(`/api/delivery/${id}`);

    if (response.status !== 200) {
        throw new Error('No se pudo eliminar la entrega');
    }
}

export async function postDeliveries(
    deliveries: IOrderSelected[]
): Promise<void> {
    const response = await api.post('/api/delivery', deliveries);
    return response.data;
}
