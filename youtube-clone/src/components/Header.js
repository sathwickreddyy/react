import React from "react";
import { toggleSideBar } from "../utils/redux/appSlice";
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();

    const handleSideBar = () => {
        dispatch(toggleSideBar());
    };

    return (
        <div className='grid grid-flow-col p-4 m-2 shadow-md'>
            <div className='flex col-span-1'>
                <img
                    alt='menu'
                    src='https://www.svgrepo.com/show/452302/hamburger-menu.svg'
                    className='w-10 rounded-xl cursor-pointer'
                    onClick={() => handleSideBar()}
                />
                <img
                    alt='youtube-logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'
                    className='w-36 ml-3'
                />
            </div>
            <div className='col-span-10 px-10'>
                <input type='text' className='border border-gray-400 w-1/2 p-2 rounded-l-full' placeholder='Search' />
                <button className='border border-gray-400 p-2 px-5 bg-gray-100 rounded-r-full'>🔍</button>
            </div>
            <div className='col-span-1'>
                <img className='w-10' src='https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png' alt='user-icon' />
            </div>
        </div>
    );
};

export default Header;
