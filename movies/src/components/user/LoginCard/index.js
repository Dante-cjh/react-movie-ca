import React, {useState} from 'react';
import {Alert, Box, Button} from '@mui/material';
import LoginForm from '../LoginForm';
import WelcomeMessage from "../WelcomeMessage";
import {useFirebaseAuth} from '../useFirebaseAuth';

const LoginCard = () => {
    const [welcome, setWelcome] = useState(false); // 控制是否显示欢迎信息
    const {user, login, logout, signUpWithGoogle} = useFirebaseAuth();
    const [error, setError] = useState('');

    const handleLogin = async (email, password) => {
        try {
            setError('');
            await login(email, password);
            setWelcome(true); // 登录成功显示欢迎信息
        } catch (error) {
            console.log(error);
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
        <Box sx={{ backgroundColor: 'lightblue', paddingTop: '20px' }}>
            {welcome && user ? (
                <>
                    <WelcomeMessage user={user} />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => handleLogout()}>Logout</Button>
                </>
            ) : (
                <Box>
                    <>
                        {error && <Alert severity="error">{error}</Alert>}
                        <LoginForm onLogin={handleLogin} />
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleGoogleSignUp}
                            sx={{ mb: 2 }}
                        >
                            Sign Up with Google
                        </Button>
                    </>
                </Box>
            )}
        </Box>
    );
};

export default LoginCard;
