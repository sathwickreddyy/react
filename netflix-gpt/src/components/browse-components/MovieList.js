import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies) return;

    return (
        <div className='px-6'>
            <h1 className='text-3xl font-bold py-3 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
