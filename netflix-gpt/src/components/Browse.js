import React from "react";
import { Header } from "./Header";
import useNowPlayingMovies from "../utils/customHooks/useNowPlayingMovies";
import MainContainer from "./browse-components/MainContainer";
import SecondaryContainer from "./browse-components/SecondaryContainer";
import usePopularMovies from "../utils/customHooks/usePopularMovies";
import useUpcomingMovies from "../utils/customHooks/useUpcomingMovies";
import useTopRatedMovies from "../utils/customHooks/useTopRatedMovies";

/* 
Planning:

    MainVideoContainer
        - Video Background
        - Video Title
    Secondary Container
        - MovieList1
            - Cards * n [Horizontally scrollable]
        - MovieList2
        .
        .
        - MovieListN
*/
const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};

export default Browse;
