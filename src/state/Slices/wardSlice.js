import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WardCol } from "../../table_components/columns";

export const fetchWards = createAsyncThunk("fetchWards", async () => {
  const response = await fetch(
    "https://nurster.com/api/hospital/allHospitalWards/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.json();
});

const wardSlice = createSlice({
  name: "ward",
  initialState: {
    wardColumn: WardCol,
    wardData: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWards.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWards.fulfilled, (state, action) => {
      state.isLoading = false;
      state.wardData = action.payload;
    });
    builder.addCase(fetchWards.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default wardSlice.reducer;
