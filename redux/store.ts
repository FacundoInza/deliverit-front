import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducers';

// Automatically adds the thunk middleware and the Redux DevTools extension
export const store = configureStore({
    // Automatically calls `combineReducers`
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
