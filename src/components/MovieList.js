import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    return (
        <div className='flex flex-col pl-16 pr-2 py-2'>
            <h1 className='text-2xl text-white'>{title}</h1>
            <div className='flex gap-2 overflow-x-scroll mt-4'>
                {movies?.map(e => <MovieCard movie={e} />)}
            </div>
        </div>
    )
}

export default MovieList