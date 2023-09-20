import { IOrder } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit';

interface IPackages {
    allPackages: IOrder[];
}

const initialState: IPackages = {
    allPackages: [],
};

const packagesSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            const id = action.payload.id;
            const packageIndex = state.allPackages.findIndex(
                (pkg) => pkg._id === id
            );
            if (packageIndex !== -1) {
                state.allPackages[packageIndex].packagesQuantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload.id;
            const packageIndex = state.allPackages.findIndex(
                (pkg) => pkg._id === id && pkg.packagesQuantity > 1
            );
            if (packageIndex !== -1) {
                state.allPackages[packageIndex].packagesQuantity -= 1;
            }
        },
    },
});

export const { increaseQuantity, decreaseQuantity } = packagesSlice.actions;
export default packagesSlice.reducer;
