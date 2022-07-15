import { configureStore } from "@reduxjs/toolkit";
import memoSlice from "./slices/memoSlice";

const store = configureStore({
  reducer: {
    memo: memoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
