import { useSelector } from "react-redux"
import MovieList from "./MovieList"

function SecondaryContainer() {
    const movies = useSelector(state => state.movies)

    return (
        <div className="flex flex-col mt-[-150px] relative z-10">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"TopRated"} movies={movies.topRatedMovies} />
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        </div>
    )
}

export default SecondaryContainer
