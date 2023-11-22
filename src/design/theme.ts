import { createTheme } from '@mui/material/styles';

const primary = {
  dark: '#433273',
  main: '#5F47A4',
  light: '#7A5FC8'
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
          backgroundColor: primary.dark
        }
      }
    }
  },
  typography: {
    fontFamily: [
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
    ].join(',')
  }
});

export default theme;
