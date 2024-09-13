import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";

export const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dipatch an action to the action list in Cart Slice.
        dispatch(addItem(item)); // name of the action is addItem in cartSlice.
    };

    return (
        <div>
            <ul>
                {items.map((item) => {
                    const { name, id, price, finalPrice, defaultPrice, description, imageId } = item?.card?.info;
                    return (
                        <div data-testid='foodItems' key={id} className='p-2 m-2 border-gray-200 border-b-2 flex justify-between'>
                            <div className='w-5/6 text-left origin-left'>
                                <div>
                                    <span>{name}</span>
                                    <br />
                                    <span>
                                        {finalPrice ? (
                                            !isNaN(price) ? (
                                                <>
                                                    <s>{(price / 100).toFixed(2)}</s>
                                                    {" " + (finalPrice / 100).toFixed(2)}
                                                </>
                                            ) : (
                                                (finalPrice / 100).toFixed(2)
                                            )
                                        ) : price ? (
                                            price / 100
                                        ) : (
                                            defaultPrice / 100
                                        )}
                                    </span>
                                </div>
                                <p className='text-xs font-extralight text-left py-4'>{description}</p>
                            </div>
                            <div className='relative w-1/6'>
                                <button
                                    onClick={() => handleAddItem(item)}
                                    className='absolute  bg-black bottom-0 right-0 cursor-pointer text-white px-3 py-1 rounded-lg'
                                >
                                    Add +
                                </button>
                                <img className='w-full h-full rounded-lg' src={CDN_URL + imageId} alt='/' />
                            </div>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default ItemList;
