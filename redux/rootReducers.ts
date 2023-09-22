import { combineReducers } from 'redux';

import packagesReducer from '../redux/features/packages/packagesSlice';
import deliveriesReducer from '../redux/features/deliveries/deliveriesSlice';
import userReducer from './features/user/userSlice';

const rootReducer = combineReducers({
    packages: packagesReducer,
    deliveries: deliveriesReducer,
    user: userReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
