import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error("An error occurred:", error);
    return (
        <div>
            <h1>Error Dude</h1>
            <h1>OOPs! Something went wrong</h1>
            <h3>
                {error.status}:{error.statusText}
            </h3>
        </div>
    );
};

export default Error;
