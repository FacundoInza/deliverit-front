import { createSlice } from '@reduxjs/toolkit';

export interface IOrderSelected {
    orderId: string;
    packagesQuantity: number;
}

interface IPackages {
    ordersSelected: IOrderSelected[];
    totalPackages: number;
}

const initialState: IPackages = {
    ordersSelected: [],
    totalPackages: 0,
};

const packagesSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {
        addOrderSelected: (state, action) => {
            const orderSelected: IOrderSelected = action.payload;

            if (state.totalPackages + orderSelected.packagesQuantity <= 10) {
                state.ordersSelected.push(orderSelected);
                state.totalPackages += orderSelected.packagesQuantity;
            }
        },
        removeOrderSelected: (state, action) => {
            const orderSelected: IOrderSelected = action.payload;

            state.ordersSelected = state.ordersSelected.filter(
                (order) => order.orderId !== orderSelected.orderId
            );

            state.totalPackages -= orderSelected.packagesQuantity;
        },
    },
});

export const { addOrderSelected, removeOrderSelected } = packagesSlice.actions;
export default packagesSlice.reducer;
