import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies = useSelector(state => state.movies.popularMovies)

    useEffect(() => {
        const getNowPopularMovies = async () => {
            return fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS)
                .then(res => res.json())
                .then(res => {
                    dispatch(
                        addPopularMovies(res.results)
                    )
                })
                .catch(err => console.error(err));
        }
        if (!popularMovies) {
            getNowPopularMovies();
        }
    }, [dispatch, popularMovies])
}

export default usePopularMovies;