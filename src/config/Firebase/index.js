// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByOMyrjxKxHPtKelyrtnutq9vLEZxtGCs",
    authDomain: "my-doctor-71f58.firebaseapp.com",
    projectId: "my-doctor-71f58",
    storageBucket: "my-doctor-71f58.appspot.com",
    messagingSenderId: "657999555413",
    appId: "1:657999555413:web:790f9c44149395431b1ddc",
    measurementId: "G-9HP78MHQGM"
};

// Initialize Firebase
const Fire = initializeApp(firebaseConfig);
const analytics = getAnalytics(Fire);

export default Fire;