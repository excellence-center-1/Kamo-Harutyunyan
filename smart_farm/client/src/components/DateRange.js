import React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { BasicSelect } from './BasicSelectForm';
import { Diagram } from './Diagram'; // Import your components
import { BarDiagram } from './BarDiagram';
import { CircleDiagram } from './CircleDiagram';
import { BasicTable } from './BasicTable';
import { ComboBoxDevice } from './ComboBoxDevice';
import  { useState }  from 'react';
export const DateRange = () => {
  const [value, setValue] = React.useState([dayjs('2022-04-17'), dayjs('2022-04-21')]);
  const [form, setForm] = React.useState('');
  const [selectedComponent, setSelectedComponent] = React.useState(null); // State for selected component
  const [selectedDevice, setSelectedDevice] = useState(null);
  
  React.useEffect(() => {
    if (value[0]) {
      console.log('start_date:', value[0].format('YYYY-MM-DD'));
    }
    if (value[1]) {
      console.log('end_date:', value[1].format('YYYY-MM-DD'));
    }
  }, [value]);

  const buttonStyle = {
    width: '20%',
    marginTop: '1%',
  };

  const DatePickerStyle = {
    justifyContent: 'center',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '80vh', // Ensure the container takes up the full viewport height
  };

  const isButtonEnabled = value[0] && value[1] && form !== '' && selectedDevice!==null;

  // Function to render the selected component
  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'Diagram':
        return <Diagram />;
      case 'BarDiagram':
        return <BarDiagram />;
      case 'CircleDiagram':
        return <CircleDiagram />;
        case 'BasicTable':
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
  const handleDeviceChange = (event, newValue) => {
    setSelectedDevice(newValue);
  };

  return (
    <div style={containerStyle}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ComboBoxDevice selectedDevice={selectedDevice} handleDeviceChange={handleDeviceChange}/>
        <DateRangePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          style={DatePickerStyle}
        />
        <BasicSelect onChange={(newForm) => setForm(newForm)} />
        <Button
          variant="contained"
          style={{ ...buttonStyle, backgroundColor: isButtonEnabled ? 'blue' : 'gray' }}
          disabled={!isButtonEnabled}
          onClick={handleButtonClick} // Call the handleButtonClick function on button click
        >
          Send
        </Button>

        {/* Render the selected component */}
        {selectedComponent && renderSelectedComponent()}
      </LocalizationProvider>
    </div>
  );
};