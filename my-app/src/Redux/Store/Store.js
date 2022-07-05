import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Feture/studentReducer";

export const store = configureStore({
  reducer: {
        counter: counterSlice,
  },
});
