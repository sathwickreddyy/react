import React, {useEffect} from 'react'
import {BACKEND_BASE_URL} from "../utils/constants.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addFeed} from "../utils/redux/slices/feedSlice.jsx";
import axios from "axios";
import UserCard from "./cards/UserCard.jsx";

const Feed = () => {
    const dispatch = useDispatch();
    const feed = useSelector((store) => store.feed);

    const getFeed = async () => {
        if(feed) {
            return;
        }
        try {
            const response = await axios.get(BACKEND_BASE_URL+"/feed", {
                withCredentials: true
            });
            dispatch(addFeed(response.data));
        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getFeed();
    }, []);


    return feed && (
        <div className={"flex justify-center my-10"}>
            { feed.data.length > 0 ? <UserCard userInfo={feed.data[0]}/>  : <h1>No More Users found! Upgrade to Premium</h1>}
        </div>
    )
}
export default Feed
