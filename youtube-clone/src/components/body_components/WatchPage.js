import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../../utils/redux/appSlice";
import { useParams, useSearchParams } from "react-router-dom";

const WatchPage = () => {
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(closeSideBar());
    });

    return (
        <div className='px-5'>
            <iframe
                width='1300'
                height='650'
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default WatchPage;
