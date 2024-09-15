import React from "react";
import { Header } from "./Header";
import useNowPlayingMovies from "../utils/customHooks/useNowPlayingMovies";
import MainContainer from "./browse-components/MainContainer";
import SecondaryContainer from "./browse-components/SecondaryContainer";

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

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};

export default Browse;
