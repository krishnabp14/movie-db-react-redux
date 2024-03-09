
// eslint-disable-next-line react/prop-types
const MovieCard = ({title, image}) => {
    return (
        <div className="m-4 hover:bg-slate-200 w-[250px] rounded-lg hover:scale-105 transition-transform">
            <img src={"https://image.tmdb.org/t/p/w342" + image} width={"250px"}  height={"600px"} className="rounded-lg hover:rounded-tl-lg"/> 
            <div className="w-{200} flex flex-col">
                <h1 className="text-center py-4 text-slate-600">{title}</h1>    
            </div>
            
        </div>
    )
}

export default MovieCard;