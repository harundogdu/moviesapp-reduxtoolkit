import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MoviesService } from "common/api/MoviesService";

export const fetchMoviesDetails = createAsyncThunk(
  "details/fetchMoviesDetails",
  async (id) => {
    const type = id.split("-")[0];
    const lastId = id.split("-")[1];
    const response = await MoviesService.get(
      `${type}/${lastId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    return response.data;
  }
);

const initialState = {
  loading: false,
  details: [],
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMoviesDetails.pending]: (state) => {
      state.loading = true;
    },
    [fetchMoviesDetails.fulfilled]: (state, action) => {
      state.details = action.payload;
      state.loading = false;
    },
    [fetchMoviesDetails.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default detailsSlice.reducer;
