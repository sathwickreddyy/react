import React, { useState } from "react";
import { Header } from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const SignInComponent = () => {
        return (
            <div>
                <h1 className='font-bold text-3xl py-4'>Sign In</h1>
                <input type='text' placeholder='Email Address' className='w-full p-5 my-3  bg-gray-600' />
                <input type='password' placeholder='Password' className='w-full p-5 my-3 bg-gray-600' />
                <button className='w-full py-4 my-6 -red-200 bg-red-600 rounded-lg cursor-pointer'> Sign In</button>
                <p className='py-4' onClick={() => toggleSignInForm()}>
                    New to Netflix? Sign up Now
                </p>
            </div>
        );
    };

    const SignOutComponent = () => {
        return (
            <div>
                <h1 className='font-bold text-3xl py-4'>Sign Out</h1>
                <input type='text' placeholder='Full Name' className='w-full p-5 my-3  bg-gray-600' />
                <input type='text' placeholder='Email Address' className='w-full p-5 my-3  bg-gray-600' />
                <input type='password' placeholder='Password' className='w-full p-5 my-3  bg-gray-600' />
                <input type='password' placeholder='Confirm Password' className='w-full p-5 my-3  bg-gray-600' />
                <button className='w-full py-4 my-6 -red-200 bg-red-600 rounded-lg cursor-pointer'>Register</button>
                <p className='py-4' onClick={() => toggleSignInForm()}>
                    Already Registered? Sign in Now.
                </p>
            </div>
        );
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    className='w-full'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg'
                    alt='login background'
                />
            </div>
            <form className='text-white w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-70'>
                {isSignInForm ? <SignInComponent /> : <SignOutComponent />}
            </form>
        </div>
    );
};

export default Login;
