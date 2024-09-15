import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='py-[20%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-sm w-3/12'>{overview}</p>
            <div>
                <button className='bg-white text-black py-4 px-16 mx-2 text-lg  rounded-lg hover:bg-opacity-80'>▶️ Play</button>
                <button className='bg-gray-500 text-white py-4 px-16 text-lg rounded-lg hover:bg-opacity-80'>More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;
