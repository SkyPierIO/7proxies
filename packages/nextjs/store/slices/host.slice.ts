// slices/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "host", // Name of the slice
  initialState: null, // Initial state
  reducers: {
    setHost: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setHost } = counterSlice.actions;
export default counterSlice.reducer;
