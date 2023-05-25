import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FloorCol } from "../../table_components/columns";

export const fetchFloors = createAsyncThunk("fetchFloors", async () => {
  const response = await fetch(
    "https://nurster.com/api/hospital/allHospitalFloors/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.json();
});

const floorSlice = createSlice({
  name: "floor",
  initialState: {
    floorColumn: FloorCol,
    floorData: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFloors.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFloors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.floorData = action.payload;
    });
    builder.addCase(fetchFloors.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default floorSlice.reducer;
