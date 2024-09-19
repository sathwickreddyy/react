import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { NETFLIX_LOGIN_BACKGROUND } from "../../utils/constants";

const GPTSearchPage = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img className='w-screen h-screen object-cover' alt='netflix-background' src={NETFLIX_LOGIN_BACKGROUND} />
            </div>
            <div>
                <GPTSearchBar />
                <GPTMovieSuggestions />
            </div>
        </>
    );
};

export default GPTSearchPage;
