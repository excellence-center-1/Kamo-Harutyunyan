import React from "react";
import { Container } from "@mui/material";
import { MyBar } from "../components/Drawer";
import { BarDiagram } from "../components/BarDiagram";
import { Diagram } from "../components/Diagram";
import { CircleDiagram } from "../components/CircleDiagram";
import { DateRange } from "../components/DateRange";



export const DeviceStatisticPage = () => {
    return (
        <div style={{ display: 'flex' }}>
            <MyBar />
            <Container>
                <DateRange />
                <CircleDiagram />
                <Diagram />
                <BarDiagram />
                
                {/*  {getImageList() } */} {/* Render the ImageList on the right side */}
            </Container>
        </div>

    );
}