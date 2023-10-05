import { SerializedError, createSlice } from '@reduxjs/toolkit';
import { IDelivery } from '../../../interfaces';
import {
    getDeliveredCompleted,
    getPendingDeliveries,
    getDeliveriesOnCourse,
    updateDelivery,
} from './deliveriesThunk';

interface IDeliveries {
    pendingsDeliveries: IDelivery[];
    finishedDeliveries: IDelivery[];
    onCourseDeliveries: IDelivery[];
    loading: boolean;
    error: SerializedError | null;
}

const initialState: IDeliveries = {
    pendingsDeliveries: [],
    finishedDeliveries: [],
    onCourseDeliveries: [],
    loading: false,
    error: null,
};

const deliveriesSlice = createSlice({
    name: 'deliveries',
    initialState,
    reducers: {},
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
            const { id, data } = action.payload;

            if (data.status === 'on-course' || data.status === 'cancelled') {
                state.pendingsDeliveries = state.pendingsDeliveries.filter(
                    (delivery) => delivery._id !== id
                );
            }
            if (data.status === 'delivered' || data.status === 'pending') {
                state.onCourseDeliveries = state.onCourseDeliveries.filter(
                    (delivery) => delivery._id !== id
                );
                state.pendingsDeliveries.push(data);
            }
        });

        builder.addCase(updateDelivery.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        builder.addCase(updateDelivery.pending, (state) => {
            state.loading = true;
        });


        builder.addCase(getDeliveriesOnCourse.fulfilled, (state, action) => {
            state.loading = false;
            state.onCourseDeliveries = action.payload.data;
        });

        builder.addCase(getDeliveriesOnCourse.rejected, (state, action) => {

            state.loading = false;
            state.error = action.error;
        });


        builder.addCase(getDeliveriesOnCourse.pending, (state) => {

            state.loading = true;
        });
    },
});

export default deliveriesSlice.reducer;
