import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    const toggleSideBar = useSelector((store) => store.app.toggleSideBar);

    if (!toggleSideBar) return;

    return (
        <div className='p-5 shadow-lg col-span-1 w-48'>
            <ul>
                <Link to={"/"}>
                    <li>Home</li>
                </Link>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>

            <h1 className='font-bold'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

            <h1 className='font-bold'>Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    );
};

export default SideBar;
