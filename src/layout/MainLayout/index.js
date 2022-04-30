import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

// project imports
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
import navigation from 'menu-items';
import { drawerWidth } from 'store/constant';
import { SET_MENU } from 'store/actions';
import PerfectScrollbar from 'react-perfect-scrollbar';

// assets
import { IconChevronRight } from '@tabler/icons';

import BG_IMAGE from 'assets/images/astro/main-back.jpg';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('lg')]: {
            marginLeft: -(drawerWidth),
            width: '100%',
        },
        [theme.breakpoints.down('lg')]: {
            width: '100%',
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '16px',
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: '100%',
    })
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme();
    const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));

    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    };

    useEffect(() => {
        dispatch({ type: SET_MENU, opened: !matchDownLG });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownLG]);

    const perfectScrollbar = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (perfectScrollbar.current !== null)
            perfectScrollbar.current.updateScroll();

        }, 1000);
    }, [perfectScrollbar]);

    return (
        <Box sx={{
            display: 'flex',
            background: `url(${BG_IMAGE})`,
            backgroundSize: 'cover',
        }}>
            <CssBaseline />

            <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

            <PerfectScrollbar
                ref={perfectScrollbar}
                component="div"
                style={{
                    height: '100vh',
                    width: '100%'
                }}
            >
                <Main theme={theme} open={leftDrawerOpened}>
                    <AppBar
                        enableColorOnDark
                        position="relative"
                        color="inherit"
                        elevation={0}
                        sx={{
                            transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                        }}
                    >
                        <Toolbar>
                            <Header handleLeftDrawerToggle={handleLeftDrawerToggle} leftDrawerOpened={leftDrawerOpened} />
                        </Toolbar>
                    </AppBar>

                    <Outlet />
                </Main>
            </PerfectScrollbar>
        </Box>
    );
};

export default MainLayout;
