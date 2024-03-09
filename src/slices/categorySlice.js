import {createSlice} from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'category',
    initialState: 'popular',
    reducers: {
        setMovieCategory: (state, action) => {
            return action.payload;
        }
    }
})

export const { setMovieCategory } = categorySlice.actions;

export default categorySlice.reducer;