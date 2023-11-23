import React, {useContext} from 'react';
import {Alert, Box, Button} from '@mui/material';
import LoginForm from '../LoginForm';
import WelcomeMessage from "../WelcomeMessage";
import { AuthContext } from '../../../contexts/AuthContext';

const LoginCard = () => {
    const {user, error, welcome, handleLogin, handleLogout, handleGoogleSignUp } = useContext(AuthContext);

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
