import { createTheme } from '@material-ui/core/styles';
import GothamLight from '../assets/fonts/Gotham-Light.woff2';
import MerriweatherBold from '../assets/fonts/merriweatherBold700.woff2';
import MerriweatherItalic from '../assets/fonts/merriweatherItalic.woff2';
import MerriweatherRegular from '../assets/fonts/merriweatherRegular.woff2';

const gothamLight = {
  fontFamily: 'Gotham Light',
  fontStyle: 'regular',
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
  fontFamily: 'Merriweather Bold',
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
  fontFamily: 'Merriweather Regular Italic',
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
  fontFamily: 'Merriweather Regular',
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
  palette: {
    common: {
      black: '#0F0F0F',
      white: '#FFFFFFEE',
    },
    primary: {
      main: '#E1252A',      
      dark: '#840C07',
      contrastText: '#eee',
    },
    secondary: {
      main: '#FFFFFFEE',
    },
    text: {
      primary: 'rgba(15, 15, 15, 1)',
      secondary: 'rgba(15, 15, 15, 0.54)',
      disabled: 'rgba(15, 15, 15, 0.38)',
      hint: 'rgba(15, 15, 15, 0.38)',
    },
    divider: 'rgba(15, 15, 15, 0.12)',
  },
  typography: {
    fontFamily: 'Gotham Light',
    h1: {
      fontFamily: 'Merriweather Regular',
      fontStyle: 'regular',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Merriweather Regular',
      fontStyle: 'regular',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'Merriweather Regular',
      fontStyle: 'regular',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'Merriweather Regular',
      fontStyle: 'regular',
      fontWeight: 400,
    },
    h5: {
      fontFamily: 'Merriweather Regular',
      fontStyle: 'regular',
      fontWeight: 400,
    },
    h6: {
      fontFamily: 'Merriweather Bold',
      fontStyle: 'bold',
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Gotham Light',
      fontStyle: 'regular',
      fontWeight: 300,
    },
    body2: {
      fontFamily: 'Gotham Light',
      fontStyle: 'regular',
      fontWeight: 300,
    },
    button: {
      fontFamily: 'Gotham Light',
      fontStyle: 'regular',
      fontWeight: 600,
    },
    caption: {
      fontFamily: 'Merriweather Regular Italic',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    overline: {
      fontFamily: 'Merriweather Regular',
      fontStyle: 'regular',
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

export default theme;
