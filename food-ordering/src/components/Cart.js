import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className='text-center m-4 p-4'>
            <h1 className='font-bold text-2xl'>Cart</h1>
            <div className='w-6/12 m-auto'>
                <button className='m-2 p-2 bg-black text-white rounded-xl' onClick={() => handleClearCart()}>
                    Clear Cart
                </button>
                <ItemList items={cartItems}></ItemList>
                {cartItems.length === 0 && <h2 className='text-lg p-10'>Cart is Empty. Add Items to cart!</h2>}
            </div>
        </div>
    );
};

export default Cart;
