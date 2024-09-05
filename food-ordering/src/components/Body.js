import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // Creating Local State Variable - Super powerful variable.
    // useState function returns a state variable in a list..
    // first param is the name of the variable, second is the function to modify the variable.
    const [listOfRestaurentData, setListOfRestaurent] = useState([]); // equivalent to let listOfRestro=[];

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/api/seo/getListing?lat=12.970195219010778&lng=77.74050557707224&isDineoutCollection=false",
        ); // browser function which returns a promise.

        const json = await data.json();
        // console.log(json);
        const rests = json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(rests);
        setListOfRestaurent(rests);
    };

    // Conditional Rendering.
    if (listOfRestaurentData.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className='body'>
            <div className='filter'>
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
                {listOfRestaurentData.map((restroInfo) => (
                    <RestroCard key={restroInfo.info.id} resInfo={restroInfo} />
                ))}
            </div>
        </div>
    );
};

export default Body;
