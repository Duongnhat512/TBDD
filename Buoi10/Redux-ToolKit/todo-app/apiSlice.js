// redux/apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "https://66fc94e8c3a184a84d176366.mockapi.io/api/duong/tasks";

export const fetchData = createAsyncThunk('api/fetchData', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});
export const createData = createAsyncThunk('api/createData', async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
});
export const updateData = createAsyncThunk('api/updateData', async ({ id, updatedData }) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
});

export const deleteData = createAsyncThunk('api/deleteData', async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});


const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createData.fulfilled, (state, action) => {
                state.loading = false;
                state.data[action.payload.id] = action.payload;
            })
            .addCase(createData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateData.fulfilled, (state, action) => {
                state.loading = false;
                state.data[action.payload.id] = action.payload;
            })
            .addCase(updateData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteData.fulfilled, (state, action) => {
                state.loading = false;
                delete state.data[action.payload];
            })
            .addCase(deleteData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default apiSlice;
