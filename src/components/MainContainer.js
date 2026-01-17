import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

function MainContainer() {
    const movies = useSelector(state => state?.movies?.nowPlayingMovies)
    if (!movies) return;
    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <div className="w-screen h-screen overflow-hidden">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer
