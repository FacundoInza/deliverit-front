import { axiosInstance } from '@/interceptors';
import { FilterDelivery, IDelivery, ResponsePaginated } from '@/interfaces';

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
