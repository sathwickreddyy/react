import React from "react";

const VideoCard = ({ info }) => {
    if (!info) return;

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className='p-2 m-2 w-72 shadow-lg'>
            <img alt='thumbnail' src={thumbnails.high.url} className='rounded-xl' />
            <ul>
                <li className='font-bold'>{title}</li>
                <li className='text-sm'>{channelTitle}</li>
                <li className='text-sm'>{statistics.viewCount} views</li>
            </ul>
        </div>
    );
};

export default VideoCard;
