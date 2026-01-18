import React from 'react'
import { IMAGE_CDN } from '../utils/constants'

const MovieCard = ({ movie }) => {
    return (
        <img src={IMAGE_CDN + movie.poster_path} alt="" />
    )
}

export default MovieCard