import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};


createAsyncThunk(async () => {
    const res = acoxox
})
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state,action) => {
state.count = state.count + action.payload
    },
    decrement: (state) => {
   state.count = state.count - 1;
    }
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
