import React from "react";
import logo from "../../public/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        console.log("Header useEffect Called");
    }, []);

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>Cart</li>
                    <button
                        className='login'
                        onClick={() => {
                            if (btnName === "Login") {
                                setBtnName("Logout");
                            } else if (btnName === "Logout") {
                                setBtnName("Login");
                            }
                            console.log(btnName);
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
