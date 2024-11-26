import React, {useRef} from 'react'
import axios from "axios";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/redux/slices/userSlice.jsx";
import {useNavigate} from "react-router";
import {BACKEND_BASE_URL} from "../utils/constants.jsx";

const Login = () => {
    const email = useRef();
    const password = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try{
            const response = await axios.post(BACKEND_BASE_URL + "/login", {
                email: email.current.value,
                password: password.current.value
            }, {
                withCredentials: true // setting this to enable cookies to be set when made CORS req to backend.
            });
            console.log(response.data);
            dispatch(addUser(response.data));
            navigate("/");
        }
        catch (e) {
            console.error(e)
        }
    }

    return (
        <div className={"flex justify-center items-center h-screen"}>
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div className={""}>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Email ID</span>
                            </div>
                            <input type="text" placeholder="Type here"
                                   ref={email}
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input type="password" placeholder="Type here"
                                   ref={password}
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={() => handleLogin()}>Login</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login
