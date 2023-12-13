import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptToggle: false,
  },
  reducers: {
    setGptToggle: (state, action) => {
      state.gptToggle = action.payload;
    },
  },
});

export const { setGptToggle } = gptSlice.actions;

export default gptSlice.reducer;
