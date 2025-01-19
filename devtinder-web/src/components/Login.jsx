import React, {useRef, useState} from 'react'
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
    const [isLoginForm, setIsLoginForm] = useState(true);
    const firstName = useRef();
    const lastName = useRef();
    const [error, setError] = React.useState("");

    const handleLogin = async () => {
        try{
            const response = await axios.post(BACKEND_BASE_URL + "/login", {
                email: email.current.value,
                password: password.current.value
            }, {
                withCredentials: true // setting this to enable cookies to be set when made CORS req to backend.
            });
            dispatch(addUser(response.data));
            setError("")
            navigate("/");
        }
        catch (e) {
            setError(e.response?.data?.error || "Something went Wrong");
            console.error(e)
        }
    }

    const handleSignUp = async () => {
        try {
            const response = await axios.post(BACKEND_BASE_URL + "/signup", {
                email: email.current.value,
                password: password.current.value,
                firstName: firstName.current.value,
                lastName: lastName.current.value
            }, {
                withCredentials: true // setting this to enable cookies to be set when made CORS req to backend.
            });
            await handleLogin();
            navigate("/profile");
        }
        catch(e) {
            setError(e.response?.data?.error || "Something went Wrong");
            console.error(e);
        }
    }

    return (
        <div className={"flex justify-center items-center h-screen"}>
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">{isLoginForm ? "Login" : "Sign Up"}</h2>
                    <div className={""}>
                        {!isLoginForm && <>
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">First Name</span>
                                </div>
                                <input type="text" placeholder="Type here"
                                       ref={firstName}
                                       className="input input-bordered w-full max-w-xs"/>
                            </label>
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">Last Name</span>
                                </div>
                                <input type="text" placeholder="Type here"
                                       ref={lastName}
                                       className="input input-bordered w-full max-w-xs"/>
                            </label>
                        </>}
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
                    { error!=="" && <p className={"text-red-500"}>{"Error: "+error}</p> }
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={() => isLoginForm ? handleLogin() : handleSignUp()}>{isLoginForm ? "Login": "Sign Up"}</button>
                    </div>
                    <p className={"m-auto py-2 text-green-700"} onClick={() => setIsLoginForm(!isLoginForm)}>{isLoginForm ? "Don't have an account yet?": "Already have an account? Click here to login."}</p>
                </div>
            </div>
        </div>

    )
}
export default Login
