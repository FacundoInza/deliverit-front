import { SerializedError, createSlice } from '@reduxjs/toolkit';
import { IDelivery } from '../../../interfaces';
import {
    deleteDelivery,
    getDeliveredCompleted,
    getPendingDeliveries,
} from './deliveriesThunk';

interface IDeliveries {
    pendingsDeliveries: IDelivery[];
    finishedDeliveries: IDelivery[];
    loading: boolean;
    error: SerializedError | null;
}

const initialState: IDeliveries = {
    pendingsDeliveries: [],
    finishedDeliveries: [],
    loading: false,
    error: null,
};

const deliveriesSlice = createSlice({
    name: 'deliveries',
    initialState,
    reducers: {
        deleteFinishedDelivery: (state, action) => {
            const { id } = action.payload;
            state.finishedDeliveries = state.finishedDeliveries.filter(
                (delivery) => delivery._id !== id
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPendingDeliveries.fulfilled, (state, action) => {
            state.loading = false;
            state.pendingsDeliveries = action.payload.data;
        });

        builder.addCase(getPendingDeliveries.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        builder.addCase(getPendingDeliveries.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getDeliveredCompleted.fulfilled, (state, action) => {
            state.loading = false;
            state.finishedDeliveries = action.payload.data;
        });

        builder.addCase(getDeliveredCompleted.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        builder.addCase(getDeliveredCompleted.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(deleteDelivery.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            state.pendingsDeliveries = state.pendingsDeliveries.filter(
                (delivery) => delivery._id !== id
            );
        });

        builder.addCase(deleteDelivery.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        builder.addCase(deleteDelivery.pending, (state) => {
            state.loading = true;
        });
    },
});

export default deliveriesSlice.reducer;
