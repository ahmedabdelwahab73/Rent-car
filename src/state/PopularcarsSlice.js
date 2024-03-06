// PopularCarsSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [],
  loading: false,
  error: null,
  record: null,
};

export const fetchCars = createAsyncThunk('cars/fetchCars', async (_, thunkAPI) => {
  const {rejectedValue} = thunkAPI;
  try {
    const res = await fetch('http://localhost:5000/cars');
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectedValue(error.message);
  }
});
export const SortRecord = createAsyncThunk('cars/SortRecord', async (_, thunkAPI) => {
  const {rejectedValue} = thunkAPI;
  try {
    const res = await fetch('http://localhost:5000/cars');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw rejectedValue(error.message);
  }
});
export const SortRecordStars = createAsyncThunk('cars/SortRecordStars', async (_, thunkAPI) => {
  const {rejectedValue} = thunkAPI;
  try {
    const res = await fetch('http://localhost:5000/cars');
    const data = await res.json();
    return data;
  } catch (error) {
    throw rejectedValue(error.message);
  }
});
  // Get one Record
  export const getOneRecordFilter = createAsyncThunk('cars/getOneRecordFilter', async (id, thunkAPI)=>{
    
    const {rejectedValue} = thunkAPI;
    try{
      const res = await fetch(`http://localhost:5000/cars/${id}`);
      const data = await res.json();
      return data
    }catch (error){
      throw rejectedValue(error.message);
    }
  })
const popularCarsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearRecord : (state)=>{
      state.records = null;
  }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.records = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      // sorted Data
      .addCase(SortRecord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(SortRecord.fulfilled, (state, action) => {
        state.records = null
        state.loading = false;
        state.records = [...action.payload].sort((a,b)=> a.price - b.price);
      })
      .addCase(SortRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      // Get one Record
      .addCase(getOneRecordFilter.pending, (state)=>{
        state.loading = true;
        state.error = null
      })
      .addCase(getOneRecordFilter.fulfilled, (state, action)=>{
        state.loading = false;
        state.record = action.payload
      })
      .addCase(getOneRecordFilter.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.error;
      })
  },
});

export const {clearRecord } = popularCarsSlice.actions;

export default popularCarsSlice.reducer;

