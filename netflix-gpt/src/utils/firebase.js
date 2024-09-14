// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGCP1tqPby7rXI84lmELMOWbn1Ne8vs7s",
    authDomain: "netflixgpt-fbedf.firebaseapp.com",
    projectId: "netflixgpt-fbedf",
    storageBucket: "netflixgpt-fbedf.appspot.com",
    messagingSenderId: "312201334713",
    appId: "1:312201334713:web:98f7cd7eda70642b2b7068",
    measurementId: "G-V4LNBDE5SK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
