import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { NETFLIX_LOGIN_BACKGROUND } from "../../utils/constants";

const GPTSearchPage = () => {
    return (
        <div>
            <img className='fixed -z-10 opacity-100 w-screen' alt='netflix-background' src={NETFLIX_LOGIN_BACKGROUND} />
            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    );
};

export default GPTSearchPage;
