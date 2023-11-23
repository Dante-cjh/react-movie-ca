import React from 'react';
import { Typography } from '@mui/material';

const WelcomeMessage = ({ user }) => (
    <Typography component="h2" variant="h5">
        Welcome, {user.displayName || user.email}!
    </Typography>
);

export default WelcomeMessage;
