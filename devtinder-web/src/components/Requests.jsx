import React, {useEffect} from 'react'
import axios from "axios";
import {BACKEND_BASE_URL} from "../utils/constants.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addRequests, removeRequest} from "../utils/redux/slices/requestsSlice.jsx";

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requests);

    const reviewRequest = async (status, _id) => {
        try {
            console.log(status, _id);
            const res = await axios.post(BACKEND_BASE_URL+"/request/review/"+status+"/"+_id,{}, {
                withCredentials: true
            });
            dispatch(removeRequest(_id));
        }
        catch (err)
        {
            console.error(err);
        }
    };

    const fetchRequests = async () => {
        try {
            const res = await axios.get(BACKEND_BASE_URL+"/user/requests/received",{
                withCredentials: true
            });
            dispatch(addRequests(res?.data?.data));
        }
        catch (err)
        {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchRequests();
    }, []);

    if(!requests) {
        return;
    }

    if(requests.length === 0) {
        return (<h1 className={"text-center my-50"}>No Requests found</h1>)
    }
    return (
        <div className={"text-center my-10"}>
            <h1 className={"text-bold text-white text-5xl"}>Connection Requests</h1>
            {
                requests.map((request, idx) =>{
                    const {firstName, lastName, photoURL, age, gender, about} = request.fromUserId;

                    return (
                        <div className={"flex justify-between items-center m-4 p-4 border rounded-lg bg-base-300 w-2/3 mx-auto"} key={idx}>
                            <div>
                                <img className={"w-20 h-20 rounded-3xl"} alt={"photo"}
                                     src={photoURL ? photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"}/>
                            </div>
                            <div className={"text-left mx-4"}>
                                <h2 className={"font-bold"}>{firstName + " " + lastName}</h2>
                                <h3>{age} {gender ? ", "+gender : ""}</h3>

                                <p>{about}</p>
                            </div>
                            <div>
                                <button className={"btn btn-primary mx-2"} onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                                <button className={"btn btn-secondary mx-2"} onClick={() => reviewRequest("rejected", request._id)}>Decline</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Requests
