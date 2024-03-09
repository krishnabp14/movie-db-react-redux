
// eslint-disable-next-line react/prop-types
import { useState } from 'react';

const Shimmer = () => {
    return (
      <div className="animate-pulse bg-gray-300 rounded-lg w-[250px] h-[380px] m-4"></div>
    );
  };

const MovieCard = ({title, image}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageOnLoad = () => {
        setImageLoaded(true);
    }

    return (
        <div className={`m-4 hover:${!imageLoaded ? '' : 'bg-slate-200'} w-[250px] rounded-lg hover:scale-105 transition-transform`}>
            {!imageLoaded && <Shimmer />}
            <img src={"https://image.tmdb.org/t/p/w342" + image} 
                width={"250px"}  
                height={"600px"} 
                className={`rounded-lg hover:rounded-tl-lg ${imageLoaded ? '' : 'hidden'}`} 
                onLoad = {handleImageOnLoad}
            /> 
            <div className="flex flex-col">
                <h1 className="text-center py-4 text-slate-600">{title}</h1>    
            </div>
            
        </div>
    )
}

export default MovieCard;