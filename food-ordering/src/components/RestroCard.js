import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
    const resInfo = props.resInfo;
    const { name, cuisines, avgRating, costForTwo } = resInfo?.info;
    const { slaString } = resInfo?.info?.sla;
    return (
        <div className='restro-card'>
            <img className='restro-logo' src={CDN_URL + resInfo.info.cloudinaryImageId} alt='restaurant' />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐️</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
        </div>
    );
};

export default RestroCard;
