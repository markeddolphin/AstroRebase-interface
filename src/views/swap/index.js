import * as React from 'react';

import {
    Grid,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import SwapForAstro from './SwapForAstro';
import WhatToDo from './WhatToDo';

export default function Swap() {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery("(max-width: 900px)");
    return (
        <div style={{ padding: '20px', display: !matchDownMd ? 'flex' : 'block' }}>
            <div style={{ paddingRight: !matchDownMd ? '7%' : '0%', width: !isMobile ? "59%" : '100%' }}>
                <WhatToDo />
            </div>
            <div style={{ paddingRight: !matchDownMd ? '4%' : '0%', width: !isMobile ? '41%' : '100%' }}>
                <SwapForAstro />
            </div>
        </div>
    );
}
