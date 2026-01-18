import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
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
        getUpcomingMovies();
    }, [dispatch])
}

export default useUpcomingMovies;