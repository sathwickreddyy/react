import {BACKEND_BASE_URL} from "../../utils/constants.jsx";
import axios from "axios";
import {useDispatch} from "react-redux";
import {removeUserFromFeed} from "../../utils/redux/slices/feedSlice.jsx";

const UserCard = ({ userInfo }) => {
    const { firstName, lastName, _id, age, gender, about } = userInfo;
    const dispatch = useDispatch();
    const handleSendRequest = async (status, _id) => {
        try {
            const response = await axios.post(BACKEND_BASE_URL+"/request/send/"+status+"/"+_id, {}, {
                withCredentials: true
            })
            dispatch(removeUserFromFeed(_id));
        }
        catch(err) {
            if(err.message === "Connection Request already exists") {
                dispatch(removeUserFromFeed(_id))
            }
            console.error(err);
        }
    }

    return (
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure>
                <img
                    src={userInfo?.photoURL ? userInfo.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"}
                    alt="Shoes"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName+ " "+lastName}</h2>
                {age && gender && <p>Age: {age}, Gender: {gender}</p>}
                <p>{about && about}</p>
                <div className="card-actions justify-center my-4">
                    <button className="btn btn-primary" onClick={() => handleSendRequest("ignored", _id)}>Ignore</button>
                    <button className="btn btn-secondary" onClick={() => handleSendRequest("interested", _id)}>Interested</button>
                </div>
            </div>
        </div>
    )
}
export default UserCard
