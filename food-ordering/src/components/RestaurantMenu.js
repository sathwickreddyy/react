import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";

const RestaurantMenu = () => {
    const { restaurantId } = useParams();

    const resInfo = useRestaurantMenu(restaurantId);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const menuItemCards =
        resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR.cards[5]?.card?.card?.itemCards ||
        resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR.cards[5]?.card?.card?.categories[0]?.itemCards;
    console.log("Item cards", menuItemCards);

    const { name, costForTwoMessage, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;

    return (
        <div className='restaurant-menu'>
            <h1>Name of the Restaurant: {name}</h1>
            <h3>Cuisines: {cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h1>Menu</h1>
            <ul>
                {menuItemCards.map((itemCard) => {
                    return (
                        <div key={itemCard.card.info.id}>
                            <li>
                                {itemCard.card.info.name} : Rs.{" "}
                                {itemCard.card.info.finalPrice / 100 ||
                                    itemCard.card.info.price / 100 ||
                                    itemCard.card.info.defaultPrice / 100}
                            </li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
