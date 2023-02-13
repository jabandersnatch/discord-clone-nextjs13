import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFilenames = createAsyncThunk(
  "get_filenames",
  async (thunkApi) => {
    const response = await fetch("http://127.0.0.1:8000/get_files/");
    const data = await response.json();
    return data;
  }
);
const initialState = {
  filenames: [],
  loading: false,
  value: 0,
} as { filenames: string[]; loading: boolean; value: number };
const filenamesSlice = createSlice({
  name: "filenames",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilenames.fulfilled, (state, action) => {
      state.loading = false;
      state.filenames = action.payload;
    });

    builder.addCase(fetchFilenames.pending, (state) => {
      state.loading = true;
    });
  },
});

export default filenamesSlice.reducer;
