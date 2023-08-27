import React, { useState } from 'react';
import { Container } from "@mui/material";
import { MyBar } from "../components/Drawer";
import { BarDiagram } from "../components/BarDiagram";
import { Diagram } from "../components/Diagram";
import { CircleDiagram } from "../components/CircleDiagram";
import { DateRange } from "../components/DateRange";
import {BasicSelect} from "../components/BasicSelect";



export const DeviceStatisticPage = () => {
    /* const [selectedOption, setSelectedOption] = useState(null);
    const handleSelectChange = (newForm) => {
        setSelectedOption(newForm);
    }; */
    return (
        <div style={{ display: 'flex' }}>
            <MyBar />
            <Container>
                
                <DateRange />
                
            </Container>
        </div>

    );
}