import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Directions, WidthFull, WidthNormal } from '@mui/icons-material';
import { BasicSelect } from './BasicSelect';

export const DateRange = () => {
   const [value, setValue] = React.useState([
      dayjs('2022-04-17'),
      dayjs('2022-04-21'),
   ]);
   const [form, setForm] = React.useState('');

   React.useEffect(() => {
      if (value[0]) { console.log('start_date:', value[0].format('YYYY-MM-DD')); }
      if (value[1]) { console.log('end_date:', value[1].format('YYYY-MM-DD')); }
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

   const isButtonEnabled = value[0] && value[1] && form !== '';

   return (
      <div style={containerStyle}>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            >
               Send
            </Button>
         </LocalizationProvider>
      </div>
   );
};
