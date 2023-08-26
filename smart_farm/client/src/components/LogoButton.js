
//Logo.js
import { useRedirect } from 'react-admin';
import IconButton from '@mui/material/IconButton';

import logo from '../assets/static/Greenhouse1.png'

export const Logo = () => {
    const redirect = useRedirect();
    const handleClick = () => {
        redirect('/dashboard');
    }
    return (
        <IconButton size="small" edge="start" color="inherit" sx={{ ml: 5, p: 0, my: 0 }} onClick={handleClick}>
            <img src={logo} alt="Logo" style={{ width: '60px', height: 'auto' }} />
        </IconButton>
    );
};
