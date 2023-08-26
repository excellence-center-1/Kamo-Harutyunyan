import * as React from 'react';
import { Drawer, ListItem, ListItemText } from '@mui/material';
//drawer.js
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const MyBar = () => {
    const theme = createTheme();

    const drawer_data = [
        { name: "About Us"},
    ];

    const getList = () => (
        <div sx={{display: 'flex', justifyContent: 'center', mt: 50}}>
          {drawer_data.map((item, index) => (
            <ListItem key={index} >
              <ListItemText primary={item.name} sx={{ textAlign: 'center', mt: 50}} primaryTypographyProps={{
                  style: {
                    fontSize: '18px'
                  }
                }}
              />
            </ListItem>
          ))}
        </div>
      );

    return (
        <ThemeProvider theme={theme}>
            <Drawer 
                variant='permanent' 
                anchor={"left"} 
                PaperProps={{sx: {backgroundColor: "#1f4700", color: "white", width:300}}}>
                {getList()}
            </Drawer>
        </ThemeProvider>
    );
}