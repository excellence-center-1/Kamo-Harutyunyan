import { createTheme } from '@mui/material/styles';


export const theme = createTheme();
theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

theme.typography.h5 = {
    fontSize: '0.8rem',
    '@media (min-width:600px)': {
        fontSize: '0.8rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
};

theme.typography.h6 = {
    fontSize: '0.5rem',
    '@media (min-width:600px)': {
        fontSize: '0.6rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '0.5rem',
    },
};