import { getUserFromClient } from '@/adapters';
import { api } from '@/api/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPendingDeliveries = createAsyncThunk(
    'getPendingDeliveries',
    async () => {
        const user = await getUserFromClient();

        const { data } = await api.get(
            `/api/delivery/all?status=pending&userId=${user.id}`
        );

        if (!data) {
            throw new Error('No se pudo obtener las entregas pendientes');
        }

        return data;
    }
);

export const getDeliveredCompleted = createAsyncThunk(
    'getDeliveriesCompleted',
    async () => {
        const user = await getUserFromClient();

        const { data } = await api.get(
            `/api/delivery/all?status=delivered&userId=${user.id}`
        );

        if (!data) {
            throw new Error('No se pudo obtener las entregas pendientes');
        }

        return data;
    }
);

export const deleteDelivery = createAsyncThunk(
    'deleteDelivery',
    async (id: string) => {
        const { data } = await api.delete(`/api/delivery/${id}`);

        if (!data) {
            throw new Error('No se pudo eliminar la entrega');
        }

        return { id: id, data: data };
    }
);
