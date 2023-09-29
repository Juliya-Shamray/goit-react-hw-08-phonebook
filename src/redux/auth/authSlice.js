import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, registerThunk } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLogin: false,
  isFresh: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, state => {
        return (state = initialState);
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLogin = true;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
