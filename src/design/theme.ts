import { createTheme } from '@mui/material/styles';

const primary = {
  dark: '#000000',
  main: '#CC6600',
  light: '#3A3A3A'
};

export const Colors = {
  white: '#FFFFFF',
  black: '#000000',
  successful: '#03BB50',
  primary
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none'
        }
      }
    }
  },
  typography: {
    fontFamily: [
      '"Montserrat"',
      '"Inter"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Poppins"',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    fontWeightLight: 100
  }
});

export default theme;
