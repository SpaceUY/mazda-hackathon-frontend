import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { CssBaseline } from '@mui/material';

import theme from 'design/theme';

import store from 'redux/store';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);
