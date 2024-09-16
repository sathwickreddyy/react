import React from "react";
import { Header } from "./Header";
import useNowPlayingMovies from "../utils/customHooks/useNowPlayingMovies";
import MainContainer from "./browse-components/MainContainer";
import SecondaryContainer from "./browse-components/SecondaryContainer";
import usePopularMovies from "../utils/customHooks/usePopularMovies";
import useUpcomingMovies from "../utils/customHooks/useUpcomingMovies";
import useTopRatedMovies from "../utils/customHooks/useTopRatedMovies";
import GPTSearchPage from "./gpt/GPTSearchPage";
import { useSelector } from "react-redux";

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

    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

    return (
        <div>
            <Header />
            {showGPTSearch ? (
                <GPTSearchPage />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </div>
    );
};

export default Browse;
