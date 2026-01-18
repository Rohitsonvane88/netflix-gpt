import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getTopRatedMovies = async () => {
            return fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS)
                .then(res => res.json())
                .then(res => {
                    dispatch(
                        addTopRatedMovies(res.results)
                    )
                })
                .catch(err => console.error(err));
        }
        getTopRatedMovies();
    }, [dispatch])
}

export default useTopRatedMovies;