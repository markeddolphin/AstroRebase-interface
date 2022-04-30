import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import { Box, Drawer, Typography, useMediaQuery, Grid, Divider, ButtonBase, Link } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faMedium, faDiscord } from '@fortawesome/free-brands-svg-icons'

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

// project imports
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
import { drawerWidth } from 'store/constant';

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
    const theme = useTheme();
    const matchUpLG = useMediaQuery(theme.breakpoints.up('lg'));

    const drawer = (
        <>
            <Box sx={{
                padding: '15px 2px 0',
                textAlign: 'center'
            }}>
                <LogoSection />
                <Grid sx={{ width: '100px', height: '37px' }}>&nbsp;</Grid>
                <Typography sx={{ fontSize: '14px' }}>CURRENT ASTRO PRICE</Typography>
                <Typography sx={{ fontSize: '20px', marginTop: '8px' }}>$0</Typography>
                <Typography sx={{ fontSize: '14px' }}>MARKET CAP</Typography>
            </Box>

            <Divider sx={{ mt: 0.25, mb: 1.25 }} />

            <BrowserView>
                <MenuList />
            </BrowserView>
            <MobileView>
                <Box sx={{ px: 2 }}>
                    <MenuList />
                </Box>
            </MobileView>

            <Box sx={{
                padding: '15px 2px 0',
                textAlign: 'center'
            }}>
                <Grid sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                    <ButtonBase disableRipple component={Link} href={'https://twitter.com/100Daysventures'} target='_blank'>
                        <FontAwesomeIcon icon={faTwitter} size={'2x'} />
                    </ButtonBase>
                    <ButtonBase disableRipple component={Link} href={'https://medium.com/@100daysventures.com'} target='_blank'>
                        <FontAwesomeIcon icon={faMedium} size={'2x'} />
                    </ButtonBase>
                    <ButtonBase disableRipple component={Link} href={'https://discord.gg/100daysventures'} target='_blank'>
                        <FontAwesomeIcon icon={faDiscord} size={'2x'} />
                    </ButtonBase>
                </Grid>
                <Typography sx={{ fontSize: '16px', marginTop: '32px' }}>Copyright © 2022</Typography>
                <Typography sx={{ fontSize: '20px' }}>100 DAYS Ventures, LLC</Typography>
                <Typography sx={{ fontSize: '14px', marginTop: '16px', marginBottom: '16px' }}>All Rights Reserved.</Typography>
            </Box>
        </>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    const perfectScrollbar = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (perfectScrollbar.current !== null)
                perfectScrollbar.current.updateScroll();

        }, 1000);
    }, [perfectScrollbar]);

    return (
        <Box component="nav" sx={{ flexShrink: { lg: 0 }, width: matchUpLG ? drawerWidth : 'auto' }} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant={matchUpLG ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        background: matchUpLG ? 'transparent' : 'linear-gradient(180deg,#17164d 50%,#101348)'
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                <PerfectScrollbar
                    ref={perfectScrollbar}
                    component="div"
                    style={{
                        background: 'rgba(0,0,0,.2)',
                        height: '100vh',
                        paddingLeft: '10%',
                        paddingRight: '10%'
                    }}
                >
                    {drawer}
                </PerfectScrollbar>
            </Drawer>
        </Box>
    );
};

Sidebar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
    window: PropTypes.object
};

export default Sidebar;
