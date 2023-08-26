import * as React from 'react';
import { styled, Grid, Box, Typography, Paper } from '@mui/material';

import dashBoardImg1 from '../assets/static/dashboardImg1.jpg'
import dashBoardImg2 from '../assets/static/dashboardImg2.jpg'
import dashboardImg3 from '../assets/static/dashboardImg3.jpg'

import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SpeedIcon from '@mui/icons-material/Speed';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import LanIcon from '@mui/icons-material/Lan';
import { SignupButton } from '../components/SignupButton';


const Img1 = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '60%',
    borderRadius: '50%'
});

const Img2 = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '80%',
    borderRadius: '5%'
});

const commonStyles = {
    p: 5,
    backgroundColor: 'rgba(243, 246, 241, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',


};

export const MainDashboard = () => {
    return (
        <>
            <Paper
                sx={{
                    p: 2,
                    m: 4,
                    maxWidth: '100%',
                    backgroundColor: '#F1FBF4'
                }}
            >
                <Grid container sx={{ p: 4 }}>
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                height: 'auto',
                                width: '90%',
                                borderBottom: '1px solid #004417',
                                p: 4,
                                m: 4
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    color: '#004417',
                                    fontFamily: 'Roboto'
                                }} >
                                GreenHouse
                            </Typography>
                        </Box >
                        <Typography
                            sx={{
                                m: 4,
                                p: 4
                            }}>
                            Invest confidently in the agriculture industry. Explore our platform, find exciting farm investment opportunities, and
                            enjoy the benefits of a thriving sector. Start growing your wealth through agricultural investments today.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} container>
                        <Img1 alt="complex" src={dashBoardImg1} />

                    </Grid>
                </Grid>
            </Paper>
            <Paper
                sx={{
                    p: 2,
                    m: 4,
                    maxWidth: '100%',
                    backgroundColor: '#FFFFF'
                }}
            >
                <Grid container spacing={3} sx={{ p: 4 }}>
                    <Grid item xs={12} sm={12}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: '#004417',
                                fontFamily: 'Roboto',
                                m: 3,
                                textAlign: 'center'
                            }} >
                            About Us
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ p: 5 }}>
                        <Img2 alt="complex" src={dashBoardImg2} />
                    </Grid>
                    <Grid item xs={12} sm={6} container>
                        <Typography
                            sx={{
                                m: 4,
                                p: 4
                            }}>
                            Real estate investment trusts (REITs) aren’t just for office buildings and apartment complexes. Indeed, REITs can also invest in farmland, and they’re a popular way for investors to enjoy the benefits of real estate investing – notably, income – without the headaches of management.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            <Paper
                sx={{
                    p: 2,
                    m: 4,
                    maxWidth: '100%',
                    backgroundColor: '#FFFFF'
                }}
            >
                <Grid container sx={{ p: 4 }}>
                    <Grid item xs={12} sm={12}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: '#004417',
                                fontFamily: 'Roboto',
                                m: 3,
                                textAlign: 'center'
                            }} >
                            Why choose Cultify
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{ p: 4 }}  >
                    <Grid item xs={12} sm={4}
                        sx={{
                            ...commonStyles
                        }}
                    >
                        <ConnectWithoutContactIcon sx={{ fontSize: 50, color: '#38A505' }} />
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                            SIMPLICITY
                        </Typography>

                        <Typography
                            sx={{
                                m: 5,
                                p: 5
                            }}>
                            Easily explore our intuitive platform and tools for a stress-free farm investment journey.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}
                        sx={{
                            ...commonStyles

                        }}
                    >
                        <SpeedIcon sx={{ fontSize: 50, color: '#38A505' }} />
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                            SPEED
                        </Typography>

                        <Typography
                            sx={{
                                m: 3,
                                p: 3
                            }}>
                            Explore and select promising farm projects quickly with our streamlined investment process.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}
                        sx={{
                            ...commonStyles

                        }}
                    >
                        <QueryStatsIcon sx={{ fontSize: 50, color: '#38A505' }} />
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                            TRANSPARENCY
                        </Typography>

                        <Typography
                            sx={{
                                m: 3,
                                p: 3
                            }}>
                            Access detailed farm profiles, projected returns, and associated risks to make informed decisions
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{ p: 4 }}>
                    <Grid
                        item
                        xs={12} sm={6} md={6}
                        sx={{
                            ...commonStyles

                        }}
                    >
                        <LanIcon sx={{ fontSize: 50, color: '#38A505' }} />
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                            DIVERSITY
                        </Typography>

                        <Typography
                            sx={{
                                m: 3,
                                p: 3
                            }}>
                            Access a wide range of farms across diverse regions and crop types for strategic investment opportunities.
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={12} sm={6} md={6}
                        sx={{
                            ...commonStyles

                        }}
                    >
                        <ReduceCapacityIcon sx={{ fontSize: 50, color: '#38A505' }} />
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                            SUPPORT
                        </Typography>

                        <Typography
                            sx={{
                                m: 3,
                                p: 3
                            }}>
                            Count on our dedicated team for prompt and reliable assistance throughout your investment journey
                        </Typography>
                    </Grid>
                </Grid>
            </Paper >

            <Paper
                sx={{
                    p: 2,
                    m: 4,
                    maxWidth: '100%',
                    backgroundColor: '#FFFFF'
                }}
            >
                <Grid container spacing={3} sx={{ p: 4 }}>
                    <Grid item xs={12} sm={12}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: '#004417',
                                fontFamily: 'Roboto',
                                m: 3,
                                textAlign: 'center'
                            }} >
                            How It works
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ p: 5 }}>
                        <Img2 alt="complex" src={dashboardImg3} />
                    </Grid>
                    <Grid item xs={12} sm={6} container>
                        <Typography
                            sx={{
                                m: 4,
                                p: 4
                            }}>
                            <p><span style={{ fontWeight: 'bold' }}>Explore:</span>  Discover diverse farm investment opportunities.</p>
                            <p><span style={{ fontWeight: 'bold' }}>Research :</span> Access detailed information about farms, returns, and risks.</p>
                            <p><span style={{ fontWeight: 'bold' }}>Invest : </span>Choose your desired farm and invest securely.</p>
                            <p><span style={{ fontWeight: 'bold' }}> Track : </span>Monitor your investments and farm progress.</p>
                            <p><span style={{ fontWeight: 'bold' }}>Manage :</span> Easily manage your profile and make adjustments.</p>
                            <p>Join us today and experience the seamless process of investing in farms.</p>
                            <SignupButton />
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

        </>
    );
};

