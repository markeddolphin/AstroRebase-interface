import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Grid,
    Typography,
    Button,
    Skeleton
} from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import ChartView from 'ui-component/cards/ChartView';

import { formatFloatFixed } from 'utils/helpers';
import useAstroMoralis from 'hooks/useAstroMoralis';

export default function YourActivity() {
    const [{ astroAPY, astroROI }] = useAstroMoralis();

    const handleDexCharts = () => {
        window.open('https://dexscreener.com/avalanche/0x7de9d08b1281455aC2D2C6f30ad3B1C9e954b608');
    }

    let navigate = useNavigate();
    const handleBuyAstro = () => {
        navigate('swap');
    }

    return (
        <MainCard title="YOUR ACTIVITY">
            <Grid container sx={{ rowGap: '15px' }}>
                <Grid item container xs={12} md={6} sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    rowGap: '15px'
                }}>
                    <Grid item xs={12} sm={6} sx={{ padding: '0px 12px' }}>
                        <SubCard>
                            <Typography sx={{
                                fontSize: '16px',
                                lineHeight: '35px'
                            }}>Your Earnings / Daily</Typography>
                            <Typography sx={{
                                color: '#4ed047',
                                fontFamily: 'Century Gothic, sans-serif',
                                fontWeight: "bold",
                                fontSize: '40px',
                                lineHeight: '35px',
                                overflow: 'hidden',
                                textAlign: 'left',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}>$0</Typography>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                margin: 0,
                                textAlign: 'left',
                                lineHeight: '35px'
                            }}>0 ASTRO</Typography>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ padding: '0px 12px' }}>
                        <SubCard>
                            <Typography sx={{
                                fontSize: '16px',
                                lineHeight: '35px'
                            }}>APY</Typography>
                            <Typography sx={{
                                fontFamily: 'Century Gothic, sans-serif',
                                fontSize: '32px',
                                lineHeight: '35px',
                                overflow: 'hidden',
                                textAlign: 'left',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                color: 'white',
                                marginBottom: '5px'
                            }}>{
                                    astroAPY ? formatFloatFixed(astroAPY, 2) + '%'
                                        : <Skeleton variant="rectangular" width={'100%'} height={35} />
                                }</Typography>
                            <Typography sx={{
                                color: 'hsla(0,0%,100%,.8)',
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                margin: 0,
                                textAlign: 'left',
                            }}>Daily % Rate (DPR): {
                                    astroROI ? formatFloatFixed(astroROI, 2) + '%'
                                        : <Skeleton variant="rectangular" width={'100%'} height={24} />
                                }</Typography>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ padding: '0px 12px' }}>
                        <SubCard>
                            <Grid sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Typography sx={{
                                    fontSize: '16px',
                                    lineHeight: '35px'
                                }}>Total Earned</Typography>
                                <Typography sx={{
                                    alignSelf: 'center',
                                    backgroundColor: 'rgba(0,0,0,.1)',
                                    border: '1px solid #595959',
                                    borderRadius: '15px',
                                    padding: '1px 10px',
                                    color: '#4ed047',
                                    fontSize: '14px',
                                    textAlign: 'center'
                                }}>+0%</Typography>
                            </Grid>
                            <Typography sx={{
                                color: '#4ed047',
                                fontFamily: 'Century Gothic, sans-serif',
                                fontSize: '32px',
                                lineHeight: '35px',
                                overflow: 'hidden',
                                textAlign: 'left',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}>$0</Typography>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                margin: 0,
                                textAlign: 'left',
                                lineHeight: '35px'
                            }}>0 ASTRO</Typography>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ padding: '0px 12px' }}>
                        <SubCard>
                            <Typography sx={{
                                fontSize: '16px',
                                lineHeight: '35px'
                            }}>Your Balance</Typography>
                            <Typography sx={{
                                color: '#4ed047',
                                fontFamily: 'Century Gothic, sans-serif',
                                fontSize: '32px',
                                lineHeight: '35px',
                                overflow: 'hidden',
                                textAlign: 'left',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}>$0</Typography>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                margin: 0,
                                textAlign: 'left',
                                lineHeight: '35px'
                            }}>0 ASTRO</Typography>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ padding: '0px 12px' }}>
                        <Button variant="contained" sx={{
                            cursor: 'pointer',
                            flexDirection: 'column',
                            padding: '14px 20px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'transparent',
                            border: '1.5px solid #7a1bff',
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                            borderRadius: '6px',
                            '&:hover': {
                                background: 'transparent',
                                boxShadow: '1px 1px 10px 0 #fa34b2',
                                transition: 'all .3s ease'
                            }
                        }}
                            onClick={handleDexCharts}>DEX Charts</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ padding: '0px 12px' }}>
                        <Button variant="contained" sx={{
                            cursor: 'pointer',
                            flexDirection: 'column',
                            padding: '14px 20px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'linear-gradient(90deg,#7a1bff -3.88%,#5947ff)',
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                            borderRadius: '6px',
                            '&:hover': {
                                boxShadow: '1px 1px 10px 0 #fa34b2',
                                transition: 'all .3s ease'
                            }
                        }}
                            onClick={handleBuyAstro}>Buy ASTRO</Button>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Grid sx={{
                        padding: '0px 12px',
                        height: '100%',
                        justifyContent: 'center'
                    }}>
                        <ChartView />
                    </Grid>
                </Grid>
            </Grid >
        </MainCard >
    );
}
