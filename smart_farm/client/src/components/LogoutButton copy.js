import React from 'react';
import { Button, useRedirect } from 'react-admin';


export const LogoutButton = () => {
    const redirect = useRedirect();
    const handleClick = () => {
        redirect('/');

    }
    return (
        <Button variant="contained" sx={{ backgroundColor: '#1F4700', mr: 5 }} onClick={handleClick}>
            Logout
        </Button>
    );
};


