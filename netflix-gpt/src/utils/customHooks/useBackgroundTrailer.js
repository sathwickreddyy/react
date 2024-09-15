import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constants";

const useBackgroundTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const filteredData = json?.results?.filter((video) => {
            return video.type === "Trailer";
        });

        const trailer = filteredData.length ? filteredData[0] : json?.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovieVideos();
    }, []);
};

export default useBackgroundTrailer;
