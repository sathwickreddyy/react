import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [menuItemCards, setMenuItemCards] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.970195219010778&lng=77.74050557707223&restaurantId=78138&catalog_qa=undefined&submitAction=ENTER",
        );

        const json = await data.json();
        console.log(json);
        const menuInformation = json?.data?.cards[2]?.card?.card?.info;
        setResInfo(menuInformation);
        const itemCards =
            json?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR.cards[5]?.card?.card?.itemCards ||
            json?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR.cards[5]?.card?.card?.categories[0]?.itemCards;
        console.log("Item cards", itemCards);
        setMenuItemCards(itemCards);
    };

    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className='restaurant-menu'>
            <h1>Name of the Restaurant: {resInfo.name}</h1>
            <h3>Cuisines: {resInfo.cuisines.join(", ")}</h3>
            <h3>{resInfo.costForTwoMessage}</h3>
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
