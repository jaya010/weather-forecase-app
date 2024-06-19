import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import App from './App';

// Create a custom theme with Material-UI
const darkTheme = createTheme({
  palette: {
    
      mode: 'dark',
    },
   
  },
);

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
