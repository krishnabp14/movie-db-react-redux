import { useState, useEffect, useRef } from 'react';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setMovies } from '../slices/moviesSlice';

const MovieList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const [page, setPage] = useState(1);
    const category = useSelector((state) => state.category);
    const movieListRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const onClickPrev = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
        }
    }

    const onClickNext = () => {
        setPage((prev) => prev + 1);
    }

    const fetchMoviesList = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTA0NGNkMzljYmI0NjgyMzljMTRlYzc2MGFmZWMwMyIsInN1YiI6IjY1OWFhZjE2ODliNTYxMDA5NDhiZDI2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SyCAuaJx8Y2TDv1RYnoXfL0M_I8UGo0A5OBaxQiay5E',
                }
            })
            const data = await response.json();
            dispatch(setMovies(data?.results));
            setLoading(false);
            console.log(movieListRef.current);
            if (movieListRef.current) {
                movieListRef.current.scrollIntoView({ behavior: 'smooth' });
                // window.scrollTo({top: 0, behavior: 'smooth'});
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchMoviesList();
    }, [page, category])

    return (
        <div className='bg-zinc-950'>
            <div ref={movieListRef}></div>
            <div className='flex flex-col text-center justify-center pt-32'>
                <h1 className='font-extrabold text-3xl text-slate-300'>Where Quality & Clarity Matters</h1>
                <h1 className='font-semibold text-md text-slate-500 mt-4'>Watch Bollywood, Tollywood in HD, exclusively available on movies.net</h1>
                <h1 className='font-semibold text-md text-slate-500'>Developed for smartphone, tablets, PC and TV.</h1>
            </div>
            <div className="text-center my-12 pl-10 text-slate-200">
                    <h1 className="font-extralight text-2xl">{category.toLocaleUpperCase()}</h1>
                    <h1 className="font-bold text-xs mt-1 mb-4">MOVIES</h1>
            </div>
            {loading ? 
                <div className='flex flex-row flex-wrap items-center justify-center'>
                    {[...Array(23)].map((_, index) => (
                        <div key={index} className='w-[250px] h-[400px] bg-gray-300 animate-pulse rounded-lg m-4'></div>
                    ))}
                </div> : 
                <div className='flex flex-row flex-wrap items-center justify-center'>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <MovieCard title={movie.title} image={movie.poster_path} />
                        </div>
                    ))}
                </div>
            }

            <div className='mt-2 flex justify-between p-8'>
                <button className='bg-slate-700 text-white p-2 rounded-3xl w-24' onClick={onClickPrev}> {"Prev"} </button>
                <button className='bg-slate-700 text-white p-2 rounded-3xl w-24' onClick={onClickNext}> {"Next"} </button>
            </div>
        </div>
    )
}

export default MovieList;
