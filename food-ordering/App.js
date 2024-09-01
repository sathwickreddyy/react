import React from "react";
import ReactDOM from "react-dom";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dfood%2Blogo&psig=AOvVaw0Dixoj1quapfdcJkJlfv5-&ust=1725314565664000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjwmunfoogDFQAAAAAdAAAAABA7"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">

        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
