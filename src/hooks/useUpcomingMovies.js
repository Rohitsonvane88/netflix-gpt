import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const upcomingMovies = useSelector(state => state.movies.upcomingMovies)

    useEffect(() => {
        const getUpcomingMovies = async () => {
            return fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS)
                .then(res => res.json())
                .then(res => {
                    dispatch(
                        addUpcomingMovies(res.results)
                    )
                })
                .catch(err => console.error(err));
        }
        if (!upcomingMovies) {
            getUpcomingMovies();
        }
    }, [dispatch, upcomingMovies])
}

export default useUpcomingMovies;