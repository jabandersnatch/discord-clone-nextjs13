import { configureStore } from "@reduxjs/toolkit";
import filenamesReducer from "../slices/filenames";
export function makeStore() {
  return configureStore({
    reducer: {
      filenames: filenamesReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
