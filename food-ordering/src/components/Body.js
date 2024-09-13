import React from "react";
import RestroCard, { withDiscountLabel } from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
    const [listOfRestaurentData, setListOfRestaurent] = useState([]);
    const [filteredRestaurents, setFilteredRestaurents] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardDiscounted = withDiscountLabel(RestroCard);

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
        // console.log("Restaurents Data Fetched ", rests);
        setListOfRestaurent(rests);
        setFilteredRestaurents(rests);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>You seem offline, please check your Internet Connection.</h1>;
    }

    return listOfRestaurentData.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'>
            <div className='filter flex'>
                <div className='search m-4 p-4'>
                    <input
                        type='text'
                        className='border-solid border to-black'
                        value={searchText}
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}
                    />
                    <button
                        className='px-4 py-1 bg-green-100 m-4 rounded-lg'
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
                <div className='m-4 p-4 flex items-center'>
                    <button
                        className='px-4 py-1 bg-gray-100'
                        onClick={() => {
                            const filteredList = listOfRestaurentData.filter((r) => r.info.avgRating > 4);
                            setListOfRestaurent(filteredList);
                        }}
                    >
                        Top Rated Restaurents
                    </button>
                </div>
            </div>
            <div className='flex flex-wrap'>
                {filteredRestaurents.map((restroInfo) => (
                    <Link key={restroInfo.info.id} to={"/restaurants/" + restroInfo.info?.id}>
                        {restroInfo.info.aggregatedDiscountInfoV3 ? (
                            <RestaurantCardDiscounted resInfo={restroInfo} />
                        ) : (
                            <RestroCard resInfo={restroInfo} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
