// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHwP6i9faj51jcAIhVNGRyhgJ7txA3am8",
    authDomain: "webca1.firebaseapp.com",
    projectId: "webca1",
    storageBucket: "webca1.appspot.com",
    messagingSenderId: "507834946333",
    appId: "1:507834946333:web:ab2794303a250618f607f4",
    measurementId: "G-CLBBGMSWY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);