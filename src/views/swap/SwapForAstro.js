import React, { useState, useEffect, useCallback } from 'react';

import {
    Grid,
    Typography,
    ButtonBase,
    Button,
    FormControl,
    Select,
    MenuItem
} from '@mui/material';

import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { IconArrowsUpDown, IconSettings } from '@tabler/icons';

import metamaskIcon from 'assets/images/astro/metamask.png';
import avaxIcon from 'assets/images/astro/avax.png';
import usdcIcon from 'assets/images/astro/usdc.png';
import astroIcon from 'assets/images/astro/astro-icon.png';
import './swap.css';
import Tokenmodal from 'ui-component/cards/Tokenmodal';

export default function SwapForAstro() {
    const [flagExchange, setFlagExchange] = useState(true);
    const [flagSwapButton, setFlagSwapButton] = useState(true);
    const [selectedToken, setSelectedToken] = useState(0);
    const [isShow1, setShow1] = useState(false);
    const [isShow2, setShow2] = useState(false);
    const [fromToken, setFromToken] = useState({ img: avaxIcon, name: "AVAX", isClose: false });
    const [toToken, setToToken] = useState({ img: astroIcon, name: "ASTRO", isClose: false });
    const [sendAmount, setAmount] = useState('');
    const [receiveAmount, setReceivedAmount] = useState('');

    const handleSelectToken = (event) => {
        setSelectedToken(event.target.value)
    }

    const handleChange = useCallback(
        (e) => {
            const RE = /^\d*\.?\d{0,18}$/
            if (RE.test(e.currentTarget.value)) {
                setAmount(e.currentTarget.value);
            }
        },
        [setAmount]
    )

    const handleChange2 = useCallback(
        (e) => {
            const RE = /^\d*\.?\d{0,18}$/
            if (RE.test(e.currentTarget.value)) {
                setReceivedAmount(e.currentTarget.value);
            }
        },
        [setReceivedAmount]
    )

    useEffect(() => {
        if (fromToken.isClose) {
            setShow1(false);
            setFromToken({ ...fromToken, isClose: false })
        }
        if (toToken.isClose) {
            setShow2(false);
            setToToken({ ...toToken, isClose: false })
        }
    }, [fromToken, toToken])
    return (
        <MainCard title="" style={{ height: "calc(100% - 50px)" }}>
            <Grid container sx={{ rowGap: '12px' }}>
                <Grid item container xs={12} md={12} sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    rowGap: '12px'
                }}>
                    <Grid container item xs={12} sm={12} sx={{ padding: '0px 12px' }}>
                        <SubCard>
                            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Grid>
                                    <Typography sx={{
                                        fontFamily: "Century Gothic, sans-serif",
                                        fontSize: '24px',
                                        lineHeight: '35px',
                                        fontWeight: '700',
                                        letterSpacing: '1px',
                                        color: 'white'
                                    }}>SWAP FOR ASTRO</Typography>
                                    {flagExchange ?
                                        <Typography sx={{
                                            fontSize: '14px',
                                            fontWeight: '400',
                                            color: 'white'
                                        }}>Buy ASTRO below using <b>AVAX</b> or <b>USDC</b></Typography> :
                                        <Typography sx={{
                                            fontSize: '14px',
                                            fontWeight: '400'
                                        }}>Buy ASTRO below using <b>AVAX</b> or <b>USDC</b></Typography>}
                                </Grid>
                                <ButtonBase variant="contained" sx={{ cursor: 'pointer' }}>
                                    <IconSettings size='30px' color='rgb(255, 184, 77)' />
                                </ButtonBase>
                            </Grid>
                            <Grid sx={{
                                display: 'flex',
                                backgroundColor: 'rgba(21, 27, 52, 0.3)',
                                border: '1px solid rgb(89, 71, 255)',
                                borderRadius: '20px',
                                flexDirection: 'column',
                                textAlign: 'left',
                                padding: '20px 16px 10px',
                                marginTop: '1rem',
                                gap: '10px'
                            }}>
                                <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '18px',
                                        fontWeight: '400',
                                    }}>From</Typography>
                                    <Typography sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '18px',
                                        fontWeight: '400',
                                        cursor: 'pointer'
                                    }}>Balance: 0</Typography>
                                </Grid>
                                <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Grid>
                                        <input style={{
                                            width: "100%", background: "transparent", outline: "none", fontFamily: "Century Gothic, sans-serif", fontSize: '22px', color: 'rgb(255, 184, 77)', textOverflow: 'ellipsis', border: 'none', fontWeight: 'bold', margin: '5px 0'
                                        }} placeholder="0.0" value={sendAmount} onChange={handleChange} />
                                    </Grid>
                                    <Grid><button style={{ color: 'rgb(255, 184, 77)', background: "transparent", border: 'none', fontSize: '16px', padding: '0px 10px', margin: '10px 10px 10px 0px' }}>MAX</button></Grid>
                                    <Grid style={{ width: "120px" }}>
                                        <Button style={{ background: 'transparent', border: 'none', fontSize: '16px', fontWeight: "bold" }} variant="contained" onClick={() => setShow1(true)}>
                                            <img src={fromToken.img} style={{ width: '30px', height: '30px', marginRight: '10px' }} />{fromToken.name}
                                        </Button>
                                        {isShow1 &&
                                            <Grid sx={{ background: '#151b34', borderRadius: '10px', padding: '10px 0', position: 'absolute' }}>
                                                <MenuItem value={0} sx={{}} onClick={() => setFromToken({ ...fromToken, img: avaxIcon, name: "AVAX", isClose: true })}>
                                                    <Grid sx={{ display: 'flex' }}>
                                                        <img src={avaxIcon} style={{ width: '30px', height: '30px' }} />
                                                        <Typography sx={{
                                                            fontFamily: 'Poppins',
                                                            fontSize: '16px',
                                                            fontWeight: 'bold',
                                                            cursor: 'pointer',
                                                            marginLeft: '8px',
                                                            color: 'white'
                                                        }}>AVAX</Typography>
                                                    </Grid>
                                                </MenuItem>
                                                <MenuItem value={1} sx={{}} onClick={() => setFromToken({ ...fromToken, img: usdcIcon, name: "USDC", isClose: true })}>
                                                    <Grid sx={{ display: 'flex' }}>
                                                        <img src={usdcIcon} style={{ width: '30px', height: '30px' }} />
                                                        <Typography sx={{
                                                            fontFamily: 'Poppins',
                                                            fontSize: '18px',
                                                            fontWeight: 'bold',
                                                            cursor: 'pointer',
                                                            marginLeft: '8px',
                                                            color: 'white'
                                                        }}>USDC</Typography>
                                                    </Grid>
                                                </MenuItem>
                                            </Grid>
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                margin: 'auto',
                                marginTop: '1rem',
                                borderRadius: '20px',
                                background: 'rgb(255, 184, 77)'
                            }}>
                                <IconArrowsUpDown size='24px' color='rgba(0, 0, 0, 0.54)' />
                            </Grid>
                            <Grid sx={{
                                display: 'flex',
                                backgroundColor: 'rgba(21, 27, 52, 0.3)',
                                border: '1px solid rgb(89, 71, 255)',
                                borderRadius: '20px',
                                flexDirection: 'column',
                                textAlign: 'left',
                                padding: '20px 16px 10px',
                                marginTop: '1rem',
                                gap: '10px'
                            }}>
                                <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '18px',
                                        fontWeight: '400',
                                    }}>To</Typography>
                                    <Typography sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '18px',
                                        fontWeight: '400',
                                        cursor: 'pointer'
                                    }}>Balance: 0</Typography>
                                </Grid>
                                <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Grid>
                                        <input style={{
                                            width: "100%", background: "transparent", outline: "none", fontFamily: "Century Gothic, sans-serif", fontSize: '22px', color: 'rgb(255, 184, 77)', textOverflow: 'ellipsis', border: 'none', fontWeight: 'bold', margin: '5px 0'
                                        }} placeholder="0.0" value={receiveAmount} onChange={handleChange2} />
                                    </Grid>
                                    <Grid>
                                        <Button style={{ width: "120px", background: 'transparent', border: 'none', fontSize: '16px', fontWeight: "bold" }} variant="contained" onClick={() => setShow2(true)}>
                                            <img src={toToken.img} style={{ width: '30px', height: '30px', marginRight: '10px' }} />{toToken.name}
                                        </Button>
                                        {isShow2 &&
                                            <Grid sx={{ background: '#151b34', borderRadius: '10px', padding: '10px 0', position: 'absolute' }}>
                                                <MenuItem value={0} sx={{}} onClick={() => setToToken({ ...toToken, img: astroIcon, name: "ASTRO", isClose: true })}>
                                                    <Grid sx={{ display: 'flex' }}>
                                                        <img src={astroIcon} style={{ width: '30px', height: '30px' }} />
                                                        <Typography sx={{
                                                            fontFamily: 'Poppins',
                                                            fontSize: '16px',
                                                            fontWeight: 'bold',
                                                            cursor: 'pointer',
                                                            marginLeft: '8px',
                                                            color: 'white'
                                                        }}>ASTRO</Typography>
                                                    </Grid>
                                                </MenuItem>
                                            </Grid>
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid sx={{ marginTop: '1rem' }}>
                                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography sx={{
                                        fontSize: '14px',
                                        marginBottom: '5px'
                                    }}>SWAP FOR ASTRO</Typography>
                                    <Typography sx={{
                                        fontSize: '16px',
                                        fontFamily: 'Poppins'
                                    }}>0 AVAX per ASTRO</Typography>
                                </Grid>
                                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography sx={{
                                        fontSize: '14px',
                                        marginBottom: '5px'
                                    }}>Slippage Tolerance</Typography>
                                    <Typography sx={{
                                        fontSize: '16px',
                                        fontFamily: 'Poppins'
                                    }}>1%</Typography>
                                </Grid>
                                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography sx={{
                                        fontSize: '14px',
                                        marginBottom: '5px'
                                    }}>Buy Tax (15%)</Typography>
                                    <Typography sx={{
                                        fontSize: '16px',
                                        fontFamily: 'Poppins'
                                    }}>0</Typography>
                                </Grid>
                            </Grid>
                            <Grid sx={{ marginTop: '1rem' }}>
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
                                }}>Enter an amount</Button>
                            </Grid>
                            <Grid sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '1rem',
                            }}>
                                <img src={metamaskIcon} style={{ width: '30px', height: '30px' }} />
                                <Typography sx={{
                                    fontSize: '14px',
                                    fontFamily: 'Poppins',
                                    marginLeft: '1rem'
                                }}> Add ASTRO token to MetaMask</Typography>
                            </Grid>
                        </SubCard>

                    </Grid>
                    <Grid container item xs={12} sm={12} sx={{ padding: '0px 12px' }}>
                        <SubCard>
                            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={{
                                    fontSize: '14px',
                                    marginBottom: '5px'
                                }}>Maximum sold</Typography>
                                <Typography sx={{
                                    fontSize: '14px',
                                    fontFamily: 'Poppins'
                                }}>0 AVAX</Typography>
                            </Grid>
                            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={{
                                    fontSize: '14px',
                                    marginBottom: '5px'
                                }}>Price Impact</Typography>
                                <Typography sx={{
                                    fontSize: '14px',
                                    color: '#4ed047',
                                    fontFamily: 'Poppins'
                                }}>{'< 0.01%'}</Typography>
                            </Grid>
                            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={{
                                    fontSize: '14px',
                                    marginBottom: '5px'
                                }}>Liquidity Provider Fee</Typography>
                                <Typography sx={{
                                    fontSize: '14px',
                                    fontFamily: 'Poppins'
                                }}>0 AVAX</Typography>
                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
            </Grid >
        </MainCard >
    );
}
