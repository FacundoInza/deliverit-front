import { combineReducers } from 'redux';

import packagesReducer from '../redux/features/packages/packagesSlice';
import deliveriesReducer from '../redux/features/deliveries/deliveriesSlice';

const rootReducer = combineReducers({
    packages: packagesReducer,
    deliveries: deliveriesReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
