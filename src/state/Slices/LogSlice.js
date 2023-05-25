import { createSlice } from "@reduxjs/toolkit";

const email = localStorage.getItem("email");
const token = localStorage.getItem("token");

const logSlice = createSlice({
  name: "floor",
  initialState: {
    logData: [
      {
        email,
        token,
      },
    ],
    isLoading: false,
    isError: false,
  },
});

export default logSlice.reducer;
