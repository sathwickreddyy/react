import React from "react";
import VideoCard from "./VideoCard";
import usePopularVideos from "../../utils/custom_hooks/usePopularVideos";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const videos = usePopularVideos();

    return (
        <div className='flex flex-wrap w-svw'>
            {videos.map((video) => (
                <Link key={video.id} to={"/watch?v=" + video.id}>
                    <VideoCard info={video} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
