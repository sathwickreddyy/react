import React from "react";
import User from "./class-components/User";
import UserClass from "./class-components/UserClass";

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <User />
            <UserClass name={"Sathwick Reddy, Y"} location={"Jagtial Bidda"} />
        </div>
    );
};

export default About;
