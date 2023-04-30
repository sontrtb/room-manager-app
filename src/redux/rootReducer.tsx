import {combineReducers} from 'redux';
import UserSlice from './slices/UserSlice';
import DeviceTokenSlice from './slices/DeviceTokenSlice';

const rootReducer = combineReducers({
  user: UserSlice.reducer,
  device_token: DeviceTokenSlice.reducer,
});

export default rootReducer;
