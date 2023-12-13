import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = appConfigSlice.actions;

export default appConfigSlice.reducer;
