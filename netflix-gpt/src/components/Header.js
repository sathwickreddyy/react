import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/loginSlice";
import { NETFLIX_LOGO } from "../utils/constants";

export const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    }),
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/login");
            }
        });

        // Upon unmounting of this Header component then we need to unsubscribe the event listener
        // this return callback function will only be called post the unmount.
        // Check the component lifecycle, when componentDidUnmount then we do some cleanup as a good practise.
        return () => {
            unsubscribe();
        };
    }, []);

    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                // onAuthStateChange will handle the logout
            })
            .catch((error) => {
                navigate("/error");
            });
    };

    return (
        <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-44' src={NETFLIX_LOGO} alt='Netflix Logo' />

            {user && (
                <div className='flex p-2'>
                    <img className='w-16 h-16 p-2' alt='usericon' src={user?.photoURL} />
                    <button onClick={handleSignout} className='font-bold text-white'>
                        (Sign Out)
                    </button>
                </div>
            )}
        </div>
    );
};
