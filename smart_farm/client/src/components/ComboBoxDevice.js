import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const ComboBoxDevice = ({ selectedDevice, handleDeviceChange }) => {
/*   const [selectedDevice, setSelectedDevice] = useState('');
 */
  /* const handleDeviceChange = (event, newValue) => {
    setSelectedDevice(newValue);
  }; */
  const topDevices = [
    { label: 'Բահ', year: 1994 },
    { label: 'Փոցխ', year: 1972 },
    { label: 'Գերանդի', year: 1974 },
  ];
  useEffect(() => {
    console.log(selectedDevice); // Log the updated selectedDevice in useEffect
  }, [selectedDevice]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={topDevices}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Device" />}
      value={selectedDevice}
      onChange={handleDeviceChange}
    />
  );
}


