import { createTheme } from '@material-ui/core/styles'
import OpenSansBold from '../assets/fonts/OpenSans-Bold.ttf'
import OpenSansLight from '../assets/fonts/OpenSans-Light.ttf'
import OpenSansRegular from '../assets/fonts/OpenSans-Regular.ttf'
import OpenSansSemiBold from '../assets/fonts/OpenSans-SemiBold.ttf'

const openSansLight = {
  fontFamily: 'Open Sans Light',
  fontStyle: 'light',
  fontDisplay: 'swap',
  fontWeight: 200,
  src: `
  local('OpenSans'),
  local('OpenSans-Light'),
  url(${OpenSansLight}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const openSansRegular = {
  fontFamily: 'Open Sans Regular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
  local('OpenSans'),
  local('OpenSans-Regular'),
  url(${OpenSansRegular}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const openSansSemiBold = {
  fontFamily: 'Open Sans Semi Bold',
  fontStyle: 'semi-bold',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `
  local('OpenSans'),
  local('OpenSans-SemiBold'),
  url(${OpenSansSemiBold}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const openSansBold = {
  fontFamily: 'Open Sans Bold',
  fontStyle: 'bold',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
  local('OpenSans'),
  local('OpenSans-Bold'),
  url(${OpenSansBold}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const theme = createTheme({
  palette: {
    common: {
      black: '#0F0F0F',
      white: '#FFFFFFEE',
    },
    primary: {
      main: '#00474C',
      contrastText: '#fff',
    },
    secondary: {
      main: '#002F33',
      contrastText: '#fff',
    },
    error: {
      main: '#E1252A',
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
    fontFamily: 'Open Sans Regular',
    h1: {
      fontFamily: 'Open Sans Regular',
      fontStyle: 'regular',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Open Sans Regular',
      fontStyle: 'regular',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'Open Sans Semi Bold',
      fontStyle: 'semi-bold',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Open Sans Regular',
      fontStyle: 'regular',
      fontWeight: 400,
    },
    h5: {
      fontFamily: 'Open Sans Light',
      fontStyle: 'light',
      fontWeight: 300,
    },
    h6: {
      fontFamily: 'Open Sans Semi Bold',
      fontStyle: 'semi-bold',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'Open Sans Regular',
      fontStyle: 'regular',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Open Sans Semi Bold',
      fontStyle: 'semi-bold',
      fontWeight: 600,
    },
    button: {
      fontFamily: 'Open Sans Light',
      fontStyle: 'light',
      fontWeight: 300,
      textTransform: 'none'
    },
    caption: {
      fontFamily: 'Open Sans Bold',
      fontStyle: 'bold',
      fontWeight: 700,
    },
    overline: {
      fontFamily: 'Open Sans Light',
      fontStyle: 'light',
      fontWeight: 300,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          openSansLight,
          openSansRegular,
          openSansSemiBold,
          openSansBold,
        ],
      },
    },
  },
})

export default theme
