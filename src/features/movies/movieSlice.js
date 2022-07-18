import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APIKey } from '../../common/api/movieApiKey';
const baseUrl = "http://www.omdbapi.com"

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await axios
        .get(`${baseUrl}?apiKey=${APIKey}&s=${term}&type=movie`)
        .catch((err) => {
            console.log("Err : ", err)
        });
    return response.data;
});
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    const response = await axios
        .get(`${baseUrl}?apiKey=${APIKey}&s=${term}&type=series`)
        .catch((err) => {
            console.log("Err : ", err)
        });
    return response.data;
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    const response = await axios
        .get(`${baseUrl}?apiKey=${APIKey}&i=${id}&Plot=full`)
        .catch((err) => {
            console.log("Err : ", err)
        });
    return response.data;
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },

    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, action) => {
            console.log("Fetched Successfully");
            return {
                ...state,
                movies: action.payload
            }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected")
        },

        [fetchAsyncShows.fulfilled]: (state, action) => {
            console.log("Fetched Successfully");
            return {
                ...state,
                shows: action.payload
            }
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, action) => {
            console.log("Fetched Successfully");
            return {
                ...state,
                selectedMovieOrShow: action.payload
            }
        },
    },
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies  //state.nameOfState.property  to access
export const getAllShows = (state) => state.movies.shows  //state.nameOfState.property  to access
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow  //state.nameOfState.property  to access
export default movieSlice.reducer;

