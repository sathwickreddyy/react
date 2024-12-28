// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router";
import axios from "axios";
import {BACKEND_BASE_URL} from "../utils/constants.jsx";
import {removeUser} from "../utils/redux/slices/userSlice.jsx";
import {removeFeed} from "../utils/redux/slices/feedSlice.jsx";

const NavBar = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post(BACKEND_BASE_URL+"/logout", {}, {
                withCredentials: true
            });
            dispatch(removeUser());
            dispatch(removeFeed());
            navigate("/login");
        }
        catch (e)
        {
            console.error(e);
        }
    }

    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost text-xl">Dev Tinder 👨🏻‍💻</Link>
            </div>
            <div className="flex-none gap-2">
                { user &&  <div className="dropdown dropdown-end mx-5 flex">
                    <p className={"mx-4 flex items-center"}>Welcome, {user.firstName}</p>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="userPhoto"
                                src={user.photoURL ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}/>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to={"/profile"}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to={"/connections"}>
                                Connections
                            </Link>
                        </li>
                        <li>
                            <Link to={"/requests"}>
                                Requests
                            </Link>
                        </li>
                        <li><a onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>}
            </div>
        </div>
    )
}

export default NavBar;
