import React, {createContext, useState} from 'react';
import {useFirebaseAuth} from "../components/user/useFirebaseAuth";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    const [welcome, setWelcome] = useState(false); // 控制是否显示欢迎信息
    const {user, login, logout, signUpWithGoogle} = useFirebaseAuth();
    const [error, setError] = useState('');

    const handleLogin = async (email, password) => {
        try {
            setError('');
            await login(email, password);
            setWelcome(true); // 登录成功显示欢迎信息
        } catch (error) {
            setError('Please enter the correct email and password.');
        }
    };

    const handleLogout = async () => {
        try {
            setError('');
            await logout();
            setWelcome(false);
        } catch (error) {
            setError('Sign Out Error');
        }
    };

    const handleGoogleSignUp = async () => {
        try {
            await signUpWithGoogle();
            setWelcome(true); // Google 登录成功
        } catch (error) {
            setError('Google Sign Out Error');
        }
    };

    return (
        <AuthContext.Provider value={{user, error, welcome, handleLogin, handleLogout, handleGoogleSignUp}}>
            {children}
        </AuthContext.Provider>
    );
};
