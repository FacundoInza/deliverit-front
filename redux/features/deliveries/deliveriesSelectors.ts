import { RootState } from '../../rootReducers'; // Asegúrate de importar correctamente

export const selectPendingDeliveries = (state: RootState) =>
    state.deliveries.pendingsDeliveries;

export const selectFinishedDeliveries = (state: RootState) =>
    state.deliveries.finishedDeliveries;
