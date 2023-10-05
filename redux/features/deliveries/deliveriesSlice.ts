import { SerializedError, createSlice } from '@reduxjs/toolkit';
import { IDelivery } from '../../../interfaces';
import {
    updateDelivery,
    getDeliveredCompleted,
    getPendingDeliveries,
    postponeDelivery,
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

        builder.addCase(updateDelivery.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            state.pendingsDeliveries = state.pendingsDeliveries.filter(
                (delivery) => delivery._id !== id
            );
        });

        builder.addCase(updateDelivery.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        builder.addCase(updateDelivery.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postponeDelivery.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            const index = state.pendingsDeliveries.findIndex(
                (delivery) => delivery._id === id
            );
            if (index !== -1) {
                state.pendingsDeliveries[index] = action.payload.data; // assuming data is the updated delivery object
            } else {
                // If the delivery was not already in the pending deliveries list, add it
                state.pendingsDeliveries.push(action.payload.data);
            }
        });

        builder.addCase(postponeDelivery.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        builder.addCase(postponeDelivery.pending, (state) => {
            state.loading = true;
        });
    },
});

export default deliveriesSlice.reducer;
