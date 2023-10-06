import { axiosInstance } from '@/interceptors';
import { FilterOrder, IOrder, ResponsePaginated } from '@/interfaces';
import { formatDateToYYYYMMDD } from '@/utils';

export async function getOrders({
    status,
    page,
}: FilterOrder): Promise<ResponsePaginated<IOrder>> {
    const date = formatDateToYYYYMMDD(new Date());

    const response = await axiosInstance.get(
        `/api/order?status=${status}&page=${page}&deliveryDate=${date}`
    );

    if (response.status !== 200) {
        throw new Error('No se pudo obtener la información del usuario');
    }

    return response.data;
}
