import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggetions from './GPTMovieSuggetions'
import { BACKGROUND_IMAGE } from '../utils/constants'

const GPTSearchPage = () => {
    return (
        <div>
            <div className="absolute w-screen h-screen">
                <img
                    className="h-screen object-cover w-full"
                    src={BACKGROUND_IMAGE} alt="" />
            </div>
            <div className='pt-[100px] md:pt-[unset]'>
                <GPTSearchBar />
            </div>
            <div>
                <GPTMovieSuggetions />
            </div>
        </div>
    )
}

export default GPTSearchPage