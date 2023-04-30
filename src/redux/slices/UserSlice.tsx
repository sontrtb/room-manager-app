import {createSlice} from '@reduxjs/toolkit';

interface UserState {
  token: string | null;
  name?: string;
  id?: number;
  role?: string;
}

const initState: UserState = {
  token: null,
};

const UserSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {
    setUser: (state, action) => {
      return {...state, ...action.payload};
    },
    logout: state => {
      state.token = null;
    },
  },
});
export const {setUser, logout} = UserSlice.actions;
export default UserSlice;
