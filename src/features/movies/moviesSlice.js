import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MoviesService } from "common/api/MoviesService";
/* thunk */
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await MoviesService.get(
    `trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
});

export const fetchTvShows = createAsyncThunk(
  "movies/fetchTvShows",
  async () => {
    const response = await MoviesService.get(
      `trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data.results;
  }
);

export const fetchPersons = createAsyncThunk(
  "movies/fetchPersons",
  async () => {
    const response = await MoviesService.get(
      `trending/person/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data.results;
  }
);

export const fetchSearch = createAsyncThunk(
  "movies/fetchSearch",
  async (query) => {
    const response = await MoviesService.get(
      `search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=1`
    );
    return response.data.results;
  }
);

const initialState = {
  movies: [],
  moviesLoading: false,
  tvShows: [],
  tvShowsLoading: false,
  persons: [],
  personsLoading: false,
  searchList: [],
  searchText: "",
  searchLoading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.moviesLoading = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.moviesLoading = false;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.moviesLoading = false;
    },

    [fetchTvShows.pending]: (state, action) => {
      state.tvShowsLoading = true;
    },
    [fetchTvShows.fulfilled]: (state, action) => {
      state.tvShows = action.payload;
      state.tvShowsLoading = false;
    },
    [fetchTvShows.rejected]: (state, action) => {
      state.tvShowsLoading = false;
    },

    [fetchPersons.pending]: (state, action) => {
      state.personsLoading = true;
    },
    [fetchPersons.fulfilled]: (state, action) => {
      state.persons = action.payload;
      state.personsLoading = false;
    },
    [fetchPersons.rejected]: (state, action) => {
      state.personsLoading = false;
    },

    [fetchSearch.pending]: (state, action) => {
      state.searchLoading = true;
    },
    [fetchSearch.fulfilled]: (state, action) => {
      state.searchList = action.payload;
      state.searchLoading = false;
    },
    [fetchSearch.rejected]: (state, action) => {
      state.searchLoading = false;
    },
  },
});

export const { setSearchText } = moviesSlice.actions;

export default moviesSlice.reducer;
