import React, {useEffect} from 'react'
import NavBar from "./NavBar.jsx";
import {Outlet, useNavigate} from "react-router";
import Footer from "./Footer.jsx";
import axios from "axios";
import {BACKEND_BASE_URL} from "../utils/constants.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../utils/redux/slices/userSlice.jsx";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);

    // if cookie exists, fetch user and update the profile or else redirect to login page.
    const fetchUser = async () => {
        if(userData) {
           return;
        }
        try{
            const user = await axios.get(BACKEND_BASE_URL+"/profile/view", {
                withCredentials: true
            });
            dispatch(addUser(user.data));
        }
        catch (e) {
            if(e.status !== 401) {
                console.error(e)
            }
            return navigate("/login");
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Body
