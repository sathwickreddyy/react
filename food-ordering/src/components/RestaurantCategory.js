import React from "react";
import { ItemList } from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
    const { data, showItems, setShowIndex } = props;

    const handleClick = () => {
        setShowIndex(!showItems);
    };

    return (
        <div>
            <div className='w-6/12 mx-auto my-4 bg-gray-100 shadow-xl p-4'>
                {/** HEADER */}
                <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                    <span className='font-bold text-lg'>
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⌄</span>
                </div>
                {/** Accordian Body */}
                {showItems ? <ItemList items={data.itemCards} /> : null}
            </div>
        </div>
    );
};

export default RestaurantCategory;
