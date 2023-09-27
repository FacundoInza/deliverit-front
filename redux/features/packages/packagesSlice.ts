import { createSlice } from '@reduxjs/toolkit';

export interface IOrderSelected {
    orderId: string;
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
            const { packagesQuantity } = action.payload;
            const { orderSelected } = action.payload;

            console.log(orderSelected);
            if (state.totalPackages + packagesQuantity <= 10) {
                state.ordersSelected.push(orderSelected);
                state.totalPackages += packagesQuantity;
            }
        },
        removeOrderSelected: (state, action) => {
            const { packagesQuantity } = action.payload;
            const { orderSelected } = action.payload;

            state.ordersSelected = state.ordersSelected.filter(
                (order) => order.orderId !== orderSelected.orderId
            );

            state.totalPackages -= packagesQuantity;
        },
    },
});

export const { addOrderSelected, removeOrderSelected } = packagesSlice.actions;
export default packagesSlice.reducer;
