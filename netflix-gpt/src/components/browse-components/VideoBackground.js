import React from "react";
import { useSelector } from "react-redux";
import useBackgroundTrailer from "../../utils/customHooks/useBackgroundTrailer";

const VideoBackground = ({ movieId }) => {
    useBackgroundTrailer(movieId);
    const trailerDetails = useSelector((store) => store.movies?.backgroundTrailerVideo);

    if (!trailerDetails) return;

    return (
        <div className='w-screen aspect-video'>
            <iframe
                className='w-screen aspect-video'
                src={`https://www.youtube.com/embed/${trailerDetails.key}?&autoplay=1&mute=1`}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
            ></iframe>
        </div>
    );
};

export default VideoBackground;
