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
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 }
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
      renderInput={(params) => <TextField {...params} label="Movie" />}
      value={selectedDevice}
      onChange={handleDeviceChange}
    />
  );
}


