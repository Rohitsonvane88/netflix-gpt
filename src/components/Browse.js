import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";

function Browse() {
    const gpt = useSelector((store) => store.gpt)
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return (
        <>
            <Header />
            {
                gpt.showGPTSearch ?
                    <GPTSearchPage />
                    :
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
            }
        </>
    )
}

export default Browse
