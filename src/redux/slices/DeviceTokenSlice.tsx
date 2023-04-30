import {createSlice} from '@reduxjs/toolkit';

interface DeviceTokenState {
  token: string | null;
}

const initState: DeviceTokenState = {
  token: null,
};

const DeviceTokenSlice = createSlice({
  name: 'device_token',
  initialState: initState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: state => {
      state.token = null;
    },
  },
});
export const {setToken, clearToken} = DeviceTokenSlice.actions;
export default DeviceTokenSlice;
