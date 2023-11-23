import {useState} from 'react';
import {initializeApp} from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

// Your Firebase configuration object
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
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const useFirebaseAuth = () => {
    const [user, setUser] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signUpWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    return {user, login, logout, signUp, signUpWithGoogle};
};
