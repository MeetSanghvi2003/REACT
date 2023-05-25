import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const bedSlice = createSlice({
  name: "bed",
  initialState: {
    msg: "",
  },
  reducers: {
    addMessage: (state, action) => {
      state.msg = action.payload;
    },
  },
});

export const { addMessage } = bedSlice.actions;
export default bedSlice.reducer;
