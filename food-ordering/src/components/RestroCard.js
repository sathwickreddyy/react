import React from "react";
import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
    const resInfo = props.resInfo;
    const { name, cuisines, avgRating, costForTwo } = resInfo?.info;
    const { slaString } = resInfo?.info?.sla;
    return (
        <div className='m-4 p-4 w-[250px] bg-gray-200 hover:bg-gray-600'>
            <img className='restro-logo rounded-xl' src={CDN_URL + resInfo.info.cloudinaryImageId} alt='restaurant' />
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐️</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
        </div>
    );
};

export default RestroCard;
