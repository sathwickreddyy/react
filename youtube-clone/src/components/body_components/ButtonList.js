import React from "react";
import ButtonComponent from "./ButtonComponent";

const ButtonList = () => {
    const buttonNames = [
        "All",
        "Gaming",
        "Songs",
        "Telugu",
        "Cricket",
        "Football",
        "Cooking",
        "Learning",
        "AWS",
        "GCP",
        "Azure",
        "Movies",
        "Technology",
        "Health",
    ];

    return (
        <div className='flex w-svw overflow-x-scroll justify-center'>
            {buttonNames.map((name) => (
                <ButtonComponent key={name} name={name} />
            ))}
        </div>
    );
};

export default ButtonList;
