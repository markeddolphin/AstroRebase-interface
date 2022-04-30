import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Grid, Box, ButtonBase, Button, Typography, useMediaQuery } from '@mui/material';
import * as React from 'react';
import { useNavigate } from "react-router-dom";

import Account from 'ui-component/moralis/account';

import { IconMenu2 } from '@tabler/icons';

import { useMoralis } from "react-moralis";
import { registerToken } from 'utils/networks';
import METAMAST_IMAGE from "assets/images/wallets/metamaskWallet.png";
import ASTRO_IMAGE from "assets/images/astro/astro-icon.png";
import { astroTokenAddress } from '_common/address';

const Header = ({ handleLeftDrawerToggle, leftDrawerOpened }) => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
    const { isAuthenticated, account } = useMoralis();

    return (
        <>

            {matchDownMd && !leftDrawerOpened && 
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: 'transparent',
                            color: '#fff',
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        onClick={handleLeftDrawerToggle}
                        color="inherit"
                    >
                        <IconMenu2 stroke={1.5} size="1.5rem" />
                    </Avatar>
                </ButtonBase>
            }

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{
                padding: '0 48px',
                gap: '16px',
                display: 'flex',
                gap: '16px'
            }}>
                {isAuthenticated && account &&
                    <ButtonBase
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '16px',
                            marginTop: '8px',
                            height: '54px'
                        }}
                        onClick={() => {
                            registerToken(
                                astroTokenAddress,
                                'ASTRO',
                                '18',
                                ASTRO_IMAGE,
                            )
                        }}
                    >
                        <img alt='metamask' width={30} src={METAMAST_IMAGE} />
                        <Typography>Add ASTRO token to MetaMask</Typography>
                    </ButtonBase>
                }
                <Account />
            </Box>
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func,
    leftDrawerOpened: PropTypes.bool
};

export default Header;
