import * as React from 'react';

import {
    Grid,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import YourAccountActivity from './YourAccountActivity';
import RebaseClaimActivity from './RebaseClaimActivity';

export default function Account() {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery("(max-width: 900px)");
    return (
        <div style={{ padding: '0px 20px', display: !matchDownMd ? 'flex' : 'block' }}>
            <div style={{ padding: !matchDownMd ? '0 12px' : '0%', width: !isMobile ? '50%': '100%' }}>
                <YourAccountActivity />
            </div>
            <div style={{ padding: !matchDownMd ? '0 12px' : '0%', width: !isMobile ? '50%': '100%' }}>
                <RebaseClaimActivity />
            </div>
        </div>

    );
}
