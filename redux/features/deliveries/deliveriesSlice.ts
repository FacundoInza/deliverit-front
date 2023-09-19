import { createSlice } from '@reduxjs/toolkit';
import { IDelivery } from '../../../interfaces';

interface IDeliveries {
    pendingsDeliveries: IDelivery[];
    finishedDeliveries: IDelivery[];
}

const initialState: IDeliveries = {
    pendingsDeliveries: [],
    finishedDeliveries: [],
};

const deliverieSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {},
});

export default deliverieSlice.reducer;
