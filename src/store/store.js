import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../slices/categorySlice';
import moviesReducer from '../slices/moviesSlice';


const store = configureStore({
    reducer: {
        category: categoryReducer,
        movies: moviesReducer,
    },
});

export default store;