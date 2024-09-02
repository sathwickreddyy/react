import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./public/logo.png";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestroCard = (props) => {
    return (
        <div className='restro-card'>
            <img
                className='restro-logo'
                src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hrn5r5ghcl7m3piog5iy'
                alt='restaurant'
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.3</h4>
            <h4>3.8 mins</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='restro-container'>
                <RestroCard resName='Meghana Foods' cuisine='Biryani, North Indian, Asian' />
                <RestroCard resName='KFC' cuisine='American, FastFood, Burger' />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
