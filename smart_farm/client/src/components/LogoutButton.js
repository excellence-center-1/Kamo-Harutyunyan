import React from 'react';
import { Button, useRedirect } from 'react-admin';
import { Typography } from '@mui/material';

export const LogoutButton = () => {
    const redirect = useRedirect();
    const handleClick = () => {
        redirect('/');
    }
    return (
        <Button onClick={handleClick} >
            <Typography color='#1F4700'>
                Logout
            </Typography>
        </Button>
    );
};


