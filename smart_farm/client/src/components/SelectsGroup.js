import React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Button from "@mui/material/Button";
import { BasicSelect } from "./BasicSelectForm";
import { Diagram } from "./Diagram"; // Import your components
import { BarDiagram } from "./BarDiagram";
import { CircleDiagram } from "./CircleDiagram";
import { BasicTable } from "./BasicTable";
import { ComboBoxDevice } from "./ComboBoxDevice";
import { useState } from "react";
import { DateRange } from "./DateRange";

export const SelectsGroup = () => {
  const [form, setForm] = React.useState("");
  const [selectedComponent, setSelectedComponent] = React.useState(null); // State for selected component
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [value, setValue] = React.useState([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);
  const handleDeviceChange = (event, newValue) => {
    setSelectedDevice(newValue);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "80vh",
    position: "relative",
  };

  const centeredBoxStyle = {
    maxWidth: "600px",
    width: "100%",
    padding: "16px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
  };

  const lineStyle = {
    position: "absolute",
    width: "100%",
    height: "2px",
    backgroundColor: "green",
  };

  const topLineStyle = {
    ...lineStyle,
    top: 0,
    right: "0.001%",
  };

  const bottomLineStyle = {
    ...lineStyle,
    bottom: 0,
    right: "0.001%",
  };

  const leftLineStyle = {
    ...lineStyle,
    top: 0,
    height: "100%", // Change height to 100% to cover the entire box height
    width: "2px", // Adjust width for a vertical line
    left: 0,
  };

  const rightLineStyle = {
    ...lineStyle,
    top: 0,
    height: "100%", // Change height to 100% to cover the entire box height
    width: "2px", // Adjust width for a vertical line
    right: 0,
  };

  React.useEffect(() => {
    if (value[0]) {
      console.log("start_date:", value[0].format("YYYY-MM-DD"));
    }
    if (value[1]) {
      console.log("end_date:", value[1].format("YYYY-MM-DD"));
    }
  }, [value]);

  const buttonStyle = {
    width: "20%",
    marginTop: "1%",
    position: "relative",
  };

  const isButtonEnabled =
    value[0] && value[1] && form !== "" && selectedDevice !== null;

  // Function to render the selected component
  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "Diagram":
        return <Diagram />;
      case "BarDiagram":
        return <BarDiagram />;
      case "CircleDiagram":
        return <CircleDiagram />;
      case "BasicTable":
        return <BasicTable />;
      default:
        return null;
    }
  };

  // Function to handle button click
  const handleButtonClick = () => {
    if (isButtonEnabled) {
      setSelectedComponent(form); // Set the selected component based on the form selection
    }
  };

  return (
    <div style={containerStyle}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={centeredBoxStyle}>
          <DateRange value={value} setValue={setValue} />
          <ComboBoxDevice
            selectedDevice={selectedDevice}
            handleDeviceChange={handleDeviceChange}
          />
          <BasicSelect onChange={(newForm) => setForm(newForm)} />
          <Button
            variant="contained"
            style={{
              ...buttonStyle,
              backgroundColor: isButtonEnabled ? "#2BB31C" : "#C0C0C0",
            }}
            disabled={!isButtonEnabled}
            onClick={handleButtonClick}
          >
            Send
          </Button>

          {selectedComponent && renderSelectedComponent()}
          <div style={topLineStyle}></div>
          <div style={bottomLineStyle}></div>
          <div style={leftLineStyle}></div>
          <div style={rightLineStyle}></div>
        </div>
      </LocalizationProvider>
    </div>
  );
};
