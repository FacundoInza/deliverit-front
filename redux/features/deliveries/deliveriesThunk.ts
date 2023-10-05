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
            throw new Error('Error getting pending deliveries');
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
            throw new Error('Error getting delivered deliveries');
        }

        return data;
    }
);

export const updateDelivery = createAsyncThunk(
    'updateStatusDelivery',
    async (id: string) => {
        const { data } = await api.put(`/api/delivery/${id}`, {
            status: 'cancelled',
        });

        if (!data) {
            throw new Error('Error updating delivery status');
        }

        return { id: id, data: data };
    }
);

export const postponeDelivery = createAsyncThunk(
    'postponeDelivery',
    async (id: string) => {
        const { data } = await api.put(`/api/delivery/${id}`, {
            status: 'pending',
        });
        if (!data) {
            throw new Error('Error updating delivery status');
        }

        return { id: id, data: data.data };
    }
);
