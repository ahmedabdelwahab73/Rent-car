// PopularCarsSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  records_L: [],
  loading: false,
  error: null,
  record: null,
};

export const fetchslidelocation = createAsyncThunk('slidelocation/fetchCars', async (_, thunkAPI) => {
  const rejectedValue = thunkAPI;
  try {
    const res = await fetch('http://localhost:5000/slidLocation');
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectedValue(error.message);
  }
});
const slidelocationCars = createSlice({
  name: "slidelocation",
  initialState,
  reducers: {
    clearRecord : (state)=>{
      state.records_L = null;
  }
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchslidelocation.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchslidelocation.fulfilled, (state, action) => {
            state.loading = false;
            state.records_L = action.payload;
        })
        .addCase(fetchslidelocation.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
    },
});

export const {clearRecord } = slidelocationCars.actions;

export default slidelocationCars.reducer;

