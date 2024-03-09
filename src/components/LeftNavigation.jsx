import { useState, useEffect } from 'react';

const LeftNavigation = () => {

    const [genres, setGenres] = useState(["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentry", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"]);


    return (
        <div className='p-4 h-screen overflow-y-auto'>
            <img src={"https://movies-for-all.netlify.app/static/media/logo.bcc287ea.svg"} className="my-8 p-8"/>
            <div className="p-4">
                <h1 className='mb-4'>
                    DISCOVER
                </h1>

                <div className="pl-2 mb-4">
                    <h1 className="p-2 text-slate-400 text-sm">Popular</h1>
                    <h1 className="p-2 text-slate-400 text-sm">Top Rated</h1>
                    <h1 className="p-2 text-slate-400 text-sm">Upcoming</h1>
                </div>

                <h1 className='mt-8 mb-4'>
                    GENRES
                </h1>

                <div className='pl-2'>
                    {
                        genres.map((genre) => (
                            <h1 key={genre} className="p-2 text-slate-400 text-sm">{genre}</h1>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default LeftNavigation;