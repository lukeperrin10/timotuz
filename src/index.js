import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { CssBaseline } from '@material-ui/core';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
import theme from './theme/theme';

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
