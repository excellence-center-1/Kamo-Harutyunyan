import React from 'react';
import { Button, useRedirect } from 'react-admin';
// import { Link } from 'react-router-dom';
import { Profile } from '../pages/Profile';
import { Typography } from '@mui/material';

export const ProfileButton = () => {
    const redirect = useRedirect();
    const handleClick = () => {
        redirect('/profile');
    }
    return (
        // <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
        <Button onClick={handleClick} >
            <Typography color='#1F4700'>
                Profile
            </Typography>
        </Button>
        // </Link>
    );
};
