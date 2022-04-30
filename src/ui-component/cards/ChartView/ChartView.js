import React from "react";
import {
    Typography,
} from '@mui/material';
import SubCard from "../SubCard";
import Graph from "./components/Graph";

const ChartView = () => (
    <SubCard>
        <Typography sx={{fontSize: "16px", fontWeight: "bold", color: 'white' }}>$0 / ASTRO</Typography>
        <div
            style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Graph />
        </div>
    </SubCard>
);

export default ChartView;
