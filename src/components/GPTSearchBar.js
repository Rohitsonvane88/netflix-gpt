import { useRef } from 'react'
import { lang } from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { ai } from '../utils/gemini'
import { AI_INSTRUCTION, API_OPTIONS } from '../utils/constants'
import { addAISuggestedMovies } from '../utils/GPTSlice'
import { setLoading } from '../utils/loadingSlice'

const GPTSearchBar = () => {
    const language = useSelector(state => state.config.language)
    const isLoading = useSelector(state => state.loading)
    const searchText = useRef(null)
    const dispatch = useDispatch()
    const handleSearchButtonClick = async (e) => {
        e.preventDefault()
        dispatch(setLoading(true))
        const userQuery = searchText.current.value
        if (!userQuery) return
        const prompt = AI_INSTRUCTION.replace("userQuery", userQuery)

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt
            })
            const text = response.text
            const cleanedText = text
                .replace(/```json/g, '')
                .replace(/```/g, '')
                .trim()

            const parsedResponse = JSON.parse(cleanedText)
            console.log(parsedResponse);
            const results = await Promise.all(parsedResponse.movies?.map(async movie => {
                const res = await fetch(
                    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie.title)}&include_adult=false&page=1`,
                    API_OPTIONS
                );
                const data = await res.json();
                return data.results?.[0];
            }))
            dispatch(addAISuggestedMovies(results.filter(Boolean)))
            dispatch(setLoading(false))

        } catch (error) {
            dispatch(setLoading(false))
            console.error("Gemini error:", error)
        }
    }

    return (
        <div className='pt-[10%] flex justify-center relative z-10'>
            <form
                className='w-1/2 grid grid-cols-12'
                onSubmit={handleSearchButtonClick}
            >
                <input
                    ref={searchText}
                    className='p-4 mx-4 col-span-9 border border-black'
                    placeholder={lang[language].gptSearchPlaceholder}
                    type="text"
                />
                <button
                    type="submit"
                    className='py-2 px-4 col-span-3 bg-red-700 text-white rounded-lg border border-black'
                    disabled={isLoading === true}
                >
                    {isLoading === true ? <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i> : lang[language].search}
                </button>
            </form>
        </div>
    )
}

export default GPTSearchBar
