import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLogin: false,
  isRefresh: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, state => {
        return (state = initialState);
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isRefresh = false;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLogin = true;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefresh = false;
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
