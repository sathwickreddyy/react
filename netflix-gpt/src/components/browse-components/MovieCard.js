import React from "react";
import { MOVIE_IMG_CDN } from "../../utils/constants";

const MovieCard = ({ movie }) => {
    if (!movie) return;

    return (
        <div className='w-36 md:w-52 pr-3 md:pr-4'>
            <img alt='Movie Card' src={MOVIE_IMG_CDN + movie.poster_path} />
        </div>
    );
};

export default MovieCard;
