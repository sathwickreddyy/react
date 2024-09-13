import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { restaurantId } = useParams();

    const resInfo = useRestaurantMenu(restaurantId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const menuItemCards =
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[5]?.card?.card?.itemCards ||
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[5]?.card?.card?.categories[0]?.itemCards;

    const categories =
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
            (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        ) || [];

    // console.log("Categories", categories);

    const { name, costForTwoMessage, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;

    return (
        <div className='text-center'>
            <h1 className='font-bold my-10 text-3xl'>{name}</h1>
            <p className='font-bold text-lg'>Cuisines: {cuisines.join(", ")}</p>
            {/* Build Categories Accordians */}
            {categories.map((category, index) => {
                return (
                    <RestaurantCategory
                        key={index}
                        data={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={(show) => {
                            return show === true ? setShowIndex(index) : setShowIndex(null);
                        }}
                    />
                );
            })}
        </div>
    );
};

export default RestaurantMenu;
