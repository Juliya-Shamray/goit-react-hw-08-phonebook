import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authAPI } from 'redux/auth/operations';

export const getContactsThunk = createAsyncThunk(
  'getContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await authAPI.get('contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (data, thunkAPI) => {
    try {
      const response = await authAPI.post('contacts', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await authAPI.delete(`contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
