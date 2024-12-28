import React, {useEffect} from 'react'
import axios from "axios";
import {BACKEND_BASE_URL} from "../utils/constants.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addConnections} from "../utils/redux/slices/connectionSlice.jsx";

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connections);

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BACKEND_BASE_URL+"/user/connections", {
                withCredentials: true
            });
            console.log(res?.data?.data);
            dispatch(addConnections(res?.data?.data));
        }
        catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchConnections();
    }, []);

    if(!connections) {
        return;
    }

    if(connections.length === 0) {
        return (<h1>No Connections found</h1>)
    }
    return (
        <div className={"text-center my-10"}>
            <h1 className={"text-bold text-white text-5xl"}>Connections</h1>
            {
                connections.map((connection, idx) =>{
                    const {firstName, lastName, photoURL, age, gender, about} = connection;

                    return (
                        <div className={"flex m-4 p-4 border rounded-lg bg-base-300 w-1/2 mx-auto"} key={idx}>
                            <div>
                                <img className={"w-20 h-20 rounded-3xl"} alt={"photo"}
                                     src={photoURL ? photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"}/>
                            </div>
                            <div className={"text-left mx-4"}>
                                <h2 className={"font-bold"}>{firstName + " " + lastName}</h2>
                                <h3>{age} {gender ? ", "+gender : ""}</h3>

                                <p>{about}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Connections
