import { createSlice } from '@reduxjs/toolkit';

export interface IOrderSelected {
    orderId: string;
    packagesQuantity: number;
}

interface IPackages {
    ordersSelected: IOrderSelected[];
    totalPackages: number;
}

// Obtener el estado guardado en localStorage
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
                // Guardar el estado en localStorage después de cada cambio
                localStorage.setItem('packagesState', JSON.stringify(state));
            }
        },
        removeOrderSelected: (state, action) => {
            const orderSelected: IOrderSelected = action.payload;

            state.ordersSelected = state.ordersSelected.filter(
                (order) => order.orderId !== orderSelected.orderId
            );

            state.totalPackages -= orderSelected.packagesQuantity;
            // Guardar el estado en localStorage después de cada cambio
            localStorage.setItem('packagesState', JSON.stringify(state));
        },
        refreshPackagesSelected: (state) => {
            const packages = localStorage.getItem('packagesState');
            if (packages) {
                const packagesState = JSON.parse(packages);
                state.ordersSelected = packagesState.ordersSelected;
                state.totalPackages = packagesState.totalPackages;
            }
        },
        deletePackagesSelected: (state) => {
            state.ordersSelected = [];
            state.totalPackages = 0;
            // Guardar el estado en localStorage después de cada cambio
            localStorage.setItem('packagesState', JSON.stringify(state));
        },
    },
});

export const {
    addOrderSelected,
    removeOrderSelected,
    refreshPackagesSelected,
    deletePackagesSelected,
} = packagesSlice.actions;
export default packagesSlice.reducer;
