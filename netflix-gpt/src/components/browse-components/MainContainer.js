import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

// Current Movie background
// Data will be obtained from store
const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return; // api hasn't fetched the data, after fetch it will re-render. this is called as early return

    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;
