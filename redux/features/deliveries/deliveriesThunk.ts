import { api } from '@/api/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPendingDeliveries = createAsyncThunk(
    'getPendingDeliveries',
    async () => {
        const { data } = await api.get('/api/delivery/all?status=pending');

        return data;
    }
);

export const getDeliveredCompleted = createAsyncThunk(
    'getDeliveriesCompleted',
    async () => {
        const { data } = await api.get('/api/delivery/all?status=delivered');

        return data;
    }
);

export const getDeliveriesOnCourse = createAsyncThunk(
    'getDeliveriesOnCourse',
    async () => {
        const { data } = await api.get('/api/delivery/all?status=on-course');

        return data;
    }
);

export const updateDelivery = createAsyncThunk(
    'updateStatusDelivery',
    async ({ id, status }: { id: string; status: string }) => {
        const { data } = await api.put(`/api/delivery/${id}`, {
            status: status,
        });

        return { id: id, data: data.data };
    }
);
