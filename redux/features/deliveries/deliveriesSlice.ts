import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { IDelivery } from '../../../interfaces';

interface IDeliveries {
    pendingsDeliveries: IDelivery[];
    finishedDeliveries: IDelivery[];
}

const initialState: IDeliveries = {
    pendingsDeliveries: [
        {
            deliveryId: `#${uuidv4().slice(-4).toUpperCase()}`,
            deliveryAddress: 'Amenabar 2356, CABA',
            status: 'pending',
        },
        {
            deliveryId: `#${uuidv4().slice(-4).toUpperCase()}`,
            deliveryAddress: 'Amenabar 2356, CABA',
            status: 'in progress',
        },
        {
            deliveryId: `#${uuidv4().slice(-4).toUpperCase()}`,
            deliveryAddress: 'Amenabar 2356, CABA',
            status: 'in progress',
        },
        {
            deliveryId: `#${uuidv4().slice(-4).toUpperCase()}`,
            deliveryAddress: 'Amenabar 2356, CABA',
            status: 'delivered',
        },
    ],
    finishedDeliveries: [
        {
            deliveryId: `#${uuidv4().slice(-4).toUpperCase()}`,
            deliveryAddress: 'Amenabar 2356, CABA',
            status: 'delivered',
        },
    ],
};

const deliverieSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {},
});

export default deliverieSlice.reducer;
