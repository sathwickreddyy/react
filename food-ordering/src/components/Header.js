import React, { useContext } from "react";
import logo from "../../public/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext);

    console.log(data);

    useEffect(() => {
        console.log("Header useEffect Called");
    }, []);

    return (
        <div className='flex justify-between bg-pink-100 shadow-lg mt-2'>
            <div className='logo-container'>
                <img className='w-48' src={logo} alt='logo' />
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
