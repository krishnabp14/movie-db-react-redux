import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../slices/categorySlice';
import moviesReducer from '../slices/moviesSlice';
import themeReducer from '../slices/themeSlice';


const store = configureStore({
    reducer: {
        category: categoryReducer,
        movies: moviesReducer,
        theme: themeReducer,
    },
});

export default store;