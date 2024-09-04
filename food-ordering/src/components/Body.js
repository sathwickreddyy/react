import RestroCard from "./RestroCard";
import restaurentData from "../utils/mockData";

const Body = () => {
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {}}>Top Rated Restaurents</button>
            </div>
            <div className='restro-container'>
                {restaurentData.map((restroInfo) => (
                    <RestroCard key={restroInfo.info.id} resInfo={restroInfo} />
                ))}
            </div>
        </div>
    );
};

export default Body;