import MovieList from "../components/MovieList";
import LeftNavigation from "../components/LeftNavigation";

const Homepage = () => {

    return (
        <div className="flex flex-row">
            <div className="w-1/8 overflow-y-auto h-screen">
                <LeftNavigation />    
            </div>
            <div className="w-7/8 overflow-y-auto h-screen">
                <MovieList />
            </div>
        </div>
    )
}

export default Homepage;
