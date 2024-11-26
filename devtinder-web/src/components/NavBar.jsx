// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useSelector} from "react-redux";
import {Link} from "react-router";

const NavBar = () => {
    const user = useSelector((store) => store.user);

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
                        <Link to={"/profile"}>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </Link>
                        <Link to={"/Login"}><a>Logout</a></Link>
                    </ul>
                </div>}
            </div>
        </div>
    )
}

export default NavBar;
