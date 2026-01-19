import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const GPTMovieSuggetions = () => {
    const movies = useSelector(state => state.gpt.suggestedMovies)

    return (
        <div className="relative z-10 mx-4 md:mx-24 mt-6 rounded-xl
                        bg-black/30 backdrop-blur-md
                        border border-white/20
                        shadow-lg">
            <div className="flex flex-col py-4">
                <h1 className="text:xl md:text-2xl text-center font-semibold text-white">
                    Suggested Movies
                </h1>

                <div className="flex gap-4 flex-wrap mt-4 scrollbar-hide h-[330px] md:h-[380px] overflow-scroll justify-center items-center">
                    {movies?.length ? movies?.map(movie => (
                        <div className="flex-shrink-0 transition-transform duration-200 hover:-translate-y-1">
                            <MovieCard movie={movie} />
                        </div>
                    )) : <h1 className='text-white text-2xl'>Nothing Here, Get Suggestions Using AI Powered Seach Box</h1>}
                </div>
            </div>
        </div>
    )
}

export default GPTMovieSuggetions