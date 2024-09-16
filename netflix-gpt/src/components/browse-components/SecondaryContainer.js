import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

/**
 * MovieList - Popular
 *      - MovieCards * n
 * MovieList - Now Playing
 *      - MovieCards * n
 * MovieList - Trending
 *      - MovieCards * n
 * MovieList - Horror
 *      - MovieCards * n
 */
const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    if (!movies) return;

    return (
        <div className='bg-black'>
            <div className='-mt-[400px] relative z-20'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
            </div>
        </div>
    );
};

export default SecondaryContainer;
