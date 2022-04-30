import * as React from 'react';

import {
    Grid
} from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";

import CommunityPerformance from './CommunityPerformance';
import YourActivity from './YourActivity';

export default function Dashboard() {
    const isMobile = useMediaQuery("(max-width: 1650px)");

    return (
        <Grid sx={ isMobile ? { padding: '20px 20px', color: '#4ed047' } : { padding: '20px 40px', color: '#4ed047' }}>
            <CommunityPerformance />
            <YourActivity />
        </Grid>
    );
}
