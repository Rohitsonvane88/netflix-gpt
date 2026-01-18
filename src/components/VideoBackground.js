import { useSelector } from "react-redux";
import useMovieTrailerVideo from "../hooks/useMovieTrailerVideo";

function VideoBackground({ movieId }) {
    const trailerId = useSelector(state => state.movies.trailerVideo)
    useMovieTrailerVideo(movieId)
    if (!trailerId) return null;
    return (
        <div className="overflow-hidden">
            {/* <iframe className="w-screen h-screen aspect-video pointer-events-none" width="560" height="315" src={`https://www.youtube.com/embed/${trailerId}?mute=1&controls=0&loop=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
            <iframe className="w-screen h-screen aspect-video pointer-events-none" width="560" height="315" src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground
