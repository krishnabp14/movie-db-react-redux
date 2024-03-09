import {createSlice} from '@reduxjs/toolkit';


export const movieSlice = createSlice({
    name: 'movies',
    initialState: [],
    reducers: {
        setMovies: (state, action) => {
            return action.payload;
        }
    }
})

export const {setMovies}  = movieSlice.actions;

export default movieSlice.reducer;