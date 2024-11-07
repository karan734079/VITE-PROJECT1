// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  userData: null,
  loading: true, // New loading state to track if auth check is complete
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
      state.loading = false;
    },
    setAuthState: (state, action) => {
      state.status = action.payload.status;
      state.userData = action.payload.userData;
      state.loading = false;
    },
    setAuthLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { login, logout, setAuthState, setAuthLoading } = authSlice.actions;

export default authSlice.reducer;
