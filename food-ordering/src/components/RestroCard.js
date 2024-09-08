import React from "react";
import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
    const resInfo = props.resInfo;
    const { name, cuisines, avgRating, costForTwo } = resInfo?.info;
    const { slaString } = resInfo?.info?.sla;
    return (
        <div className='m-4 p-4 w-[250px] h-[500px] bg-gray-200 hover:bg-gray-600'>
            <img className='h-6/12 restro-logo rounded-xl' src={CDN_URL + resInfo.info.cloudinaryImageId} alt='restaurant' />
            <div className='h-6/12 flex flex-col justify-between'>
                <h3 className='font-bold py-4 text-lg'>{name}</h3>
                <h4 className='text-sm'>{cuisines.join(", ")}</h4>
                <div className='py-2 text-sm flex justify-between'>
                    <h4>{avgRating} ⭐️</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{slaString}</h4>
                </div>
            </div>
        </div>
    );
};

// Creating a Higher Order Component.

// Accepts RestroCard as input and returns RestroCardPromoted card funciton.

export const withDiscountLabel = (RestaurantCard) => {
    return (props) => {
        const { header, subHeader } = props.resInfo.info.aggregatedDiscountInfoV3;
        return (
            <div>
                <label className='absolute bg-black text-white rounded-lg p-1'>{header + " - " + subHeader} </label>
                <RestaurantCard resInfo={props.resInfo} />
            </div>
        );
    };
};

export default RestroCard;
