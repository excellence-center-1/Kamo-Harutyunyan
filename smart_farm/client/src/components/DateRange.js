import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


export const DateRange = ({ value, setValue }) => {
  /* const [value, setValue] = React.useState([dayjs('2022-04-17'), dayjs('2022-04-21')]); */
  
  return (
    <div >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <DateRangePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          
        />
        

      </LocalizationProvider>
    </div>
  );
};
