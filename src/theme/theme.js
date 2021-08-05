import { createTheme } from '@material-ui/core/styles';
import GothamLight from '../assets/fonts/Gotham-Light.woff2';
import MerriweatherBold from '../assets/fonts/merriweatherBold700.woff2';
import MerriweatherItalic from '../assets/fonts/merriweatherItalic.woff2';
import MerriweatherRegular from '../assets/fonts/merriweatherRegular.woff2';

const gothamLight = {
  fontFamily: 'Gotham',
  fontStyle: 'light',
  fontDisplay: 'swap',
  fontWeight: 300,
  src: `
  local('Gotham'),
  local('Gotham-Light'),
  url(${GothamLight}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const merriweatherBold = {
  fontFamily: 'Merriweather',
  fontStyle: 'bold',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
  local('Merriweather'),
  local('Merriweather-Bold'),
  url(${MerriweatherBold}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const merriweatherItalic = {
  fontFamily: 'Merriweather',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
  local('Merriweather'),
  local('Merriweather-Italic'),
  url(${MerriweatherItalic}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const merriweatherRegular = {
  fontFamily: 'Merriweather',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
  local('Merriweather'),
  local('Merriweather-normal'),
  url(${MerriweatherRegular}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createTheme({
  typography: {
    fontFamily: 'Gotham, Merriweather',
    h1: {
      fontFamily: 'Merriweather',
      fontWeight: 400,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          gothamLight,
          merriweatherBold,
          merriweatherItalic,
          merriweatherRegular,
        ],
      },
    },
  },
});
