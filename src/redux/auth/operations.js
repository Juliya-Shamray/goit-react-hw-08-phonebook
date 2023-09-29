// https://connections-api.herokuapp.com/

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const authAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  authAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  authAPI.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'register',
  async (credential, thunkAPI) => {
    try {
      const { data } = await authAPI.post('users/signup', credential);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  'login',
  async (credential, thunkAPI) => {
    try {
      const { data } = await authAPI.post('users/login', credential);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await authAPI.post('users/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk(
  'refresh',
  async (credential, thunkAPI) => {
    try {
      const { data } = await authAPI.get('users/current', credential);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
