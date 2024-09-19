import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../browse-components/MovieList";

const GPTMovieSuggestions = () => {
    const { tmdbMovieResults, movieNames } = useSelector((store) => store.gpt.recommendations);
    if (!movieNames | !tmdbMovieResults) return;
    console.log(movieNames, tmdbMovieResults);
    return (
        <div className='p-4 m-4 bg-black text-white opacity-90'>
            {movieNames.map((movie, index) => (
                <MovieList title={movie} key={movie} movies={tmdbMovieResults[index]} />
            ))}
        </div>
    );
};

export default GPTMovieSuggestions;
