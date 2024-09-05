import React from "react";
import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    // Creating Local State Variable - Super powerful variable.
    // useState function returns a state variable in a list..
    // first param is the name of the variable, second is the function to modify the variable.
    const [listOfRestaurentData, setListOfRestaurent] = useState([]); // equivalent to let listOfRestro=[];
    const [filteredRestaurents, setFilteredRestaurents] = useState([]); // equivalent

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.970195219010778&lng=77.74050557707223&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        ); // browser function which returns a promise.

        const json = await data.json();
        // console.log(json);
        const rests = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("Restaurents Data Fetched ", rests);
        setListOfRestaurent(rests);
        setFilteredRestaurents(rests);
    };

    return listOfRestaurentData.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input
                        type='text'
                        className='search-box'
                        value={searchText}
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            // Filter restaurants and update the UI.

                            const filteredRestaurents = listOfRestaurentData.filter((resInfo) =>
                                resInfo.info.name.toLowerCase().includes(searchText.toLowerCase()),
                            );
                            console.log(filteredRestaurents);
                            if (filteredRestaurents.length > 0) {
                                setFilteredRestaurents(filteredRestaurents);
                            }
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className='filter-btn'
                    onClick={() => {
                        const filteredList = listOfRestaurentData.filter((r) => r.info.avgRating > 4);
                        setListOfRestaurent(filteredList);
                    }}
                >
                    Top Rated Restaurents
                </button>
            </div>
            <div className='restro-container'>
                {filteredRestaurents.map((restroInfo) => (
                    <Link key={restroInfo.info.id} to={"/restaurants/" + restroInfo.info?.id}>
                        <RestroCard resInfo={restroInfo} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
