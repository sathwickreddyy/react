import React from "react";
import MainContainer from "./body_components/MainContainer";
import SideBar from "./body_components/SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className='grid grid-flow-col'>
            <SideBar />
            <Outlet />
        </div>
    );
};

export default Body;
