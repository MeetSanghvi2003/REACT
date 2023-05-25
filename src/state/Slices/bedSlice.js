import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BedCol } from "../../table_components/columns";

export const fetchBeds = createAsyncThunk("fetchBeds", async () => {
  const response = await fetch(
    "https://nurster.com/api/hospital/allHospitalBeds/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.json();
});

const bedSlice = createSlice({
  name: "bed",
  initialState: {
    bedColumn: BedCol,
    bedData: [],
    isLoading: false,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBeds.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBeds.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bedData = action.payload;
    });
    builder.addCase(fetchBeds.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default bedSlice.reducer;
