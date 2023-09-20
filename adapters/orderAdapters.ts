import { axiosInstance } from '@/interceptors';
import { FilterOrder, IOrder, ResponsePaginated } from '@/interfaces';

export async function getOrders({
    status,
    page,
}: FilterOrder): Promise<ResponsePaginated<IOrder>> {
    const response = await axiosInstance.get(
        `/api/order?status=${status}&page=${page}`
    );

    if (response.status !== 200) {
        throw new Error('No se pudo obtener la información del usuario');
    }

    return response.data;
}
