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
