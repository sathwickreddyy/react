import { useEffect, useState } from "react";
import { MENU_API_URL } from "../constants";

// Custom Hook -  Js Utility Function.
const useRestaurantMenu = (restaurantId) => {
    // fetch the data and store in resInfo.

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API_URL + restaurantId);
        const json = await data.json();
        setResInfo(json);
    };

    return resInfo;
};

export default useRestaurantMenu;
