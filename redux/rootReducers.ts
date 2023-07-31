import { combineReducers } from 'redux';
import packagesReducer from '../redux/features/packages/packagesSlice';

const rootReducer = combineReducers({
    packages: packagesReducer,
});

export default rootReducer;
