import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../utils/movieSlice"

const useMovieTrailerVideo = (movieId) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getMovieVideos = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
            const json = await data.json();
            const trailerVideos = json.results.filter(e => e.type === "Trailer")

            const youtubekey = trailerVideos.length ? trailerVideos[0].key : json.results[0].key
            dispatch(addTrailerVideo(youtubekey))
        }
        getMovieVideos()
    }, [])
}

export default useMovieTrailerVideo