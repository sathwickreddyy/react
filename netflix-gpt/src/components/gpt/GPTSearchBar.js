import React, { useRef } from "react";
import { lang } from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import grogClient from "../../utils/grogAI";
import { API_OPTIONS } from "../../utils/constants";
import { addGptMovieResult } from "../../utils/redux/gptSlice";

const GPTSearchBar = () => {
    const languageKey = useSelector((store) => store.config?.lang);
    const searchTextRef = useRef(null);
    const dispatch = useDispatch();

    const searchMovieInTMDB = async (movieName) => {
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
            API_OPTIONS,
        );

        const json = await data.json();

        return json.results;
    };

    const handleGPTSearchClick = async () => {
        const gptResults = await makeRequest();

        const gptMovies = gptResults.choices[0].message.content.split(",");

        const dataPromiseArray = gptMovies.map((movie) => searchMovieInTMDB(movie.trim())); // returns list of promises

        const tmdbResults = await Promise.all(dataPromiseArray);

        dispatch(
            addGptMovieResult({
                movieNames: gptMovies,
                tmdbMovieResults: tmdbResults,
            }),
        );
    };

    const makeRequest = async () => {
        const gptQuery =
            "Act as a Movie Recommendation System and suggest some movies for the query " +
            searchTextRef.current.value +
            ". Only give me names of 10 movies, comma separated with no prefix content and suffix content like the example result given ahead. Example Result: 'Kalki, Bahubali, Mirchi, Julayi, RRR, Magadheera, Bunny, Lovely, Hi Nanna, Arjun Reddy'";

        const gptResults = await grogClient.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: gptQuery,
                },
            ],
            model: "llama3-8b-8192",
        });

        return gptResults;
    };

    return (
        <div className='pt-[30%] md:pt-[10%] flex justify-center'>
            <form className='w-full md:w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchTextRef}
                    type='text'
                    className='p-4 m-4 col-span-9 rounded-xl'
                    placeholder={lang[languageKey].gptSearchPlaceHolder}
                />
                <button className='py-2 px-4 m-4 bg-red-500 text-white rounded-xl  col-span-3' onClick={handleGPTSearchClick}>
                    {lang[languageKey].search}
                </button>
            </form>
        </div>
    );
};

export default GPTSearchBar;
