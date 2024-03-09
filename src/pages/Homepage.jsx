import MovieList from "../components/MovieList";
import LeftNavigation from "../components/LeftNavigation";

const Homepage = () => {
    return (
        <div className="flex flex-row">
            <div className="w-1/8">
                <LeftNavigation />    
            </div>
            <div className="w-7/8">
                <div className="text-center my-8">
                    <h1 className="font-extralight text-2xl">POPULAR</h1>
                    <h1 className="font-bold text-xs mt-1 mb-4">MOVIES</h1>
                </div>
                <MovieList />
            </div>
            
        </div>
    )
}

export default Homepage;