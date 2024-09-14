import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = () => {
        let errorMsg = checkValidData(emailRef.current.value, passwordRef.current.value);
        //Validate form data
        if (isSignInForm) {
            if (errorMsg !== null) {
                setErrorMessage(errorMsg);
                setSuccessMessage(null);
                return;
            }
            // login
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    setSuccessMessage("User Authentication Successful... Redirecting to home page");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            if (passwordRef.current.value !== confirmPasswordRef.current.value) errorMsg = "Passwords didn't match";
            if (errorMsg !== null) {
                setErrorMessage(errorMsg);
                setSuccessMessage(null);
                return;
            }
            // Sign up
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log("Signed in ", user);
                    setSuccessMessage("Registration Successful");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMessage(errorCode + "-" + errorMessage);
                    setSuccessMessage(null);
                });
        }
    };

    const SignInComponent = () => {
        return (
            <div>
                <h1 className='font-bold text-3xl py-4'>Sign In</h1>
                <input
                    ref={emailRef}
                    type='text'
                    id='sign-in-email'
                    name='email'
                    autoComplete='email'
                    placeholder='Enter your email'
                    className='w-full p-5 my-3 bg-gray-600'
                />
                <input
                    ref={passwordRef}
                    type='password'
                    id='sign-in-password'
                    name='password'
                    autoComplete='password'
                    placeholder='Password'
                    className='w-full p-5 my-3 bg-gray-600'
                />
                <p className='font-semibold text-sm text-red-600'>{errorMessage != null && errorMessage}</p>
                <p className='text-green-400 font-semibold text-center'>{successMessage != null && successMessage}</p>
                <button className='w-full py-4 my-6 bg-red-600 rounded-lg cursor-pointer' onClick={handleButtonClick}>
                    Sign In
                </button>
                <p className='py-4' onClick={toggleSignInForm}>
                    New to Netflix? Sign up Now
                </p>
            </div>
        );
    };

    const SignUpComponent = () => {
        return (
            <div>
                <h1 className='font-bold text-3xl py-4'>Sign Up</h1>
                <input
                    type='text'
                    id='full-name'
                    name='full-name'
                    autoComplete='username'
                    placeholder='Full Name'
                    className='w-full p-5 my-3 bg-gray-600'
                />
                <input
                    type='text'
                    ref={emailRef}
                    id='sign-up-email'
                    name='email'
                    autoComplete='email'
                    placeholder='Email Address'
                    className='w-full p-5 my-3 bg-gray-600'
                />
                <input
                    type='password'
                    ref={passwordRef}
                    id='sign-up-password'
                    name='password'
                    placeholder='Password'
                    autoComplete='new-password'
                    className='w-full p-5 my-3 bg-gray-600'
                />
                <input
                    type='password'
                    id='confirm-password'
                    ref={confirmPasswordRef}
                    name='confirm-password'
                    autoComplete='new-password'
                    placeholder='Confirm Password'
                    className='w-full p-5 my-3 bg-gray-600'
                />
                <p className='font-semibold text-sm text-red-600'>{errorMessage != null && errorMessage}</p>
                <p className='text-green-400 font-semibold text-center'>{successMessage != null && successMessage}</p>
                <button className='w-full py-4 my-6 bg-red-600 rounded-lg cursor-pointer' onClick={handleButtonClick}>
                    Register
                </button>
                <p className='py-4' onClick={toggleSignInForm}>
                    Already Registered? Sign in Now.
                </p>
            </div>
        );
    };

    return (
        <div
            className='h-screen bg-cover bg-center'
            style={{
                backgroundImage:
                    "url('https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg')",
            }}
            aria-label='login-background'
        >
            <Header />
            <form
                onSubmit={(e) => e.preventDefault()}
                className='text-white w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-70 rounded-xl'
            >
                {isSignInForm ? <SignInComponent /> : <SignUpComponent />}
            </form>
        </div>
    );
};

export default Login;
