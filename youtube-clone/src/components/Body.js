import React from "react";
import MainContainer from "./body_components/MainContainer";
import SideBar from "./body_components/SideBar";

const Body = () => {
    return (
        <div className='grid grid-flow-col'>
            <SideBar />
            <MainContainer />
        </div>
    );
};

export default Body;
