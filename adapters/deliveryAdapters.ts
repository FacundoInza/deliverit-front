import { axiosInstance } from '@/interceptors';
import { FilterDelivery, IDelivery, ResponsePaginated } from '@/interfaces';
import { IOrderSelected } from '@/redux/features/packages/packagesSlice';

export async function getDeliveries({
    status,
    userId,
}: FilterDelivery): Promise<ResponsePaginated<IDelivery>> {
    const response = await axiosInstance.get(
        `/api/delivery/all?status=${status}&userId=${userId}`
    );

    if (response.status !== 200) {
        throw new Error('No se pudo obtener la información del usuario');
    }

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
    const response = await axiosInstance.post('/api/delivery', deliveries);

    if (response.status !== 200) {
        throw new Error('No se pudo crear la entrega');
    }

    return response.data;
}
