import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "./Slices/floorSlice";
import bedReducer from "./Slices/bedSlice";
import wardReducer from "./Slices/wardSlice";
import logReducer from "./Slices/LogSlice";
import toastReducer from "./Slices/toastSlice";
export const store = configureStore({
  reducer: {
    floor: floorReducer,
    bed: bedReducer,
    ward: wardReducer,
    log: logReducer,
    toast: toastReducer,
  },
});
