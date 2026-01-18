import React from 'react'
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
    const language = useSelector(state => state.config.language)
    return (
        <div className='pt-[10%] flex justify-center relative z-10'>
            <form className='w-1/2 grid grid-cols-12' >
                <input className='p-4 mx-4 col-span-9 border border-black' placeholder={lang[language].gptSearchPlaceholder} type="text" name="search" id="" />
                <button className='py-2 px-4 col-span-3 bg-red-700 text-white rounded-lg border border-black'>{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar