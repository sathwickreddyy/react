import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext);

    // Step 6: Now subsribe to the store using a Selector.
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className='flex justify-between bg-pink-100 shadow-lg mt-2'>
            <div className='logo-container'>
                <img className='w-48' src={"../../public/logo.png"} alt='logo' />
            </div>
            <div className='flex items-center'>
                <ul className='flex p-4 m-4'>
                    <li className='px-4'>Online Status: {onlineStatus ? "✅" : "❌"}</li>
                    <li className='px-4'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className='px-2 text-lg font-bold'>
                        <Link to='/cart'>Cart ({cartItems.length} items)</Link>
                    </li>
                    {btnName === "Logout" && <li className='px-4'>{data.loggedInUser}</li>}
                    <button
                        className='px-4'
                        onClick={() => {
                            if (btnName === "Login") {
                                setBtnName("Logout");
                            } else if (btnName === "Logout") {
                                setBtnName("Login");
                            }
                            // console.log(btnName);
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
