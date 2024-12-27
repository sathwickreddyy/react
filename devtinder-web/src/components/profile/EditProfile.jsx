import React, {useState} from 'react'
import UserCard from "../cards/UserCard.jsx";
import {BACKEND_BASE_URL} from "../../utils/constants.jsx";
import {useDispatch} from "react-redux";
import {addUser} from "../../utils/redux/slices/userSlice.jsx";
import axios from "axios";

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [gender, setGender] = useState(user.gender);
    const [photoURL, setphotoURL] = useState(user.photoURL);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const [status, setStatus] = useState(undefined);

    const handleSaveProfile = async () => {
        // clear errors
        setError("");
        try {
            const res = await axios.patch(BACKEND_BASE_URL+"/profile/edit", {
                firstName,
                lastName,
                age,
                about,
                gender,
                photoURL
            }, {
                withCredentials: true,
            });
            dispatch(addUser(res?.data?.data));
            setStatus("Profile Update Successful")
            setTimeout(() => {
                setStatus(undefined)
            }, 3000)
        }
        catch (e) {
            console.error(e);
            setError(e.response?.data?.error);
            setStatus("Profile Update Failed")
        }
    }

    return (
        <>
        {status && <div className="toast toast-top toast-start">
                <div className="alert alert-info">
                    <span>{status}</span>
                </div>
            </div>}
            <div className={"flex justify-center my-10"}>
                <div className={"flex justify-center mx-10"}>
                    <div className={"flex justify-center items-center h-screen"}>
                        <div className="card bg-base-300 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title justify-center">Edit Profile</h2>
                                <div className={""}>
                                    <label className="form-control w-full max-w-xs my-2">
                                        <div className="label">
                                            <span className="label-text">First Name</span>
                                        </div>
                                        <input type="text"
                                               value={firstName}
                                               onChange={(e) => setFirstName(e.target.value)}
                                               className="input input-bordered w-full max-w-xs"/>
                                    </label>
                                    <label className="form-control w-full max-w-xs my-2">
                                        <div className="label">
                                            <span className="label-text">LastName</span>
                                        </div>
                                        <input type="text"
                                               value={lastName}
                                               onChange={(e) => setLastName(e.target.value)}
                                               className="input input-bordered w-full max-w-xs"/>
                                    </label>
                                    <label className="form-control w-full max-w-xs my-2">
                                        <div className="label">
                                            <span className="label-text">photoURL</span>
                                        </div>
                                        <input type="text"
                                               value={photoURL}
                                               onChange={(e) => setphotoURL(e.target.value)}
                                               className="input input-bordered w-full max-w-xs"/>
                                    </label>
                                    <label className="form-control w-full max-w-xs my-2">
                                        <div className="label">
                                            <span className="label-text">Age</span>
                                        </div>
                                        <input type="text"
                                               value={age}
                                               onChange={(e) => setAge(e.target.value)}
                                               className="input input-bordered w-full max-w-xs"/>
                                    </label>
                                    <label className="form-control w-full max-w-xs my-2">
                                        <div className="label">
                                            <span className="label-text">Gender</span>
                                        </div>
                                        <input type="text"
                                               value={gender}
                                               onChange={(e) => setGender(e.target.value)}
                                               className="input input-bordered w-full max-w-xs"/>
                                    </label>
                                    <label className="form-control w-full max-w-xs my-2">
                                        <div className="label">
                                            <span className="label-text">About</span>
                                        </div>
                                        <textarea
                                            value={about}
                                            onChange={(e) => {
                                                setAbout(e.target.value);
                                                e.target.style.height = "auto"; // Reset height to calculate new height
                                                e.target.style.height = `${e.target.scrollHeight}px`; // Set height to the scroll height
                                            }}
                                            className="input input-bordered w-full h-fit max-w-xs"/>
                                    </label>
                                </div>
                                {error !== "" && <p className={"text-red-500"}>{"Error: " + error}</p>}
                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary" onClick={handleSaveProfile}>Save Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <UserCard userInfo={{firstName, lastName, photoURL, age, about, gender}}/>
            </div>
        </>

    )
}
export default EditProfile
