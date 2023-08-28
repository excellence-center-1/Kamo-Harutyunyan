import React, { useState } from 'react';
import { Container } from "@mui/material";
import { MyBar } from "../components/Drawer";
import { DateRange } from "../components/DateRange";
import { SelectsGroup } from '../components/SelectsGroup';


export const DeviceStatisticPage = () => {
    
    return (
        <div style={{ display: 'flex' }}>
            <MyBar />
            <Container>
                
                < SelectsGroup/>
                
            </Container>
        </div>

    );
}