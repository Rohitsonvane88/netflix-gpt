import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggetions from './GPTMovieSuggetions'
import { BACKGROUND_IMAGE } from '../utils/constants'

const GPTSearchPage = () => {
    return (
        <div>
            <div className="absolute w-screen h-screen">
                <img
                    className="h-full w-full"
                    src={BACKGROUND_IMAGE} alt="" />
            </div>
            <GPTSearchBar />
            <GPTMovieSuggetions />
        </div>
    )
}

export default GPTSearchPage