const UserCard = ({ userInfo }) => {
    const { firstName, lastName, photoURL, age, gender, about } = userInfo;
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
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Interested</button>
                </div>
            </div>
        </div>
    )
}
export default UserCard
