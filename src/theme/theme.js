import { createTheme } from '@material-ui/core/styles'

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
    divider: 'rgba(255, 255, 255, 1)',
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    h1: {
      fontStyle: 'regular',
      fontWeight: 400,
    },
    h2: {
      fontStyle: 'regular',
      fontWeight: 400,
      fontSize: '2.4rem',
    },
    h3: {
      fontStyle: 'semi-bold',
      fontWeight: 600,
    },
    h4: {
      fontStyle: 'regular',
      fontWeight: 400,
      fontSize: '1.5rem'
    },
    h5: {
      fontStyle: 'light',
      fontWeight: 200,
    },
    h6: {
      fontStyle: 'semiBold',
      fontWeight: 600,
    },
    body1: {
      fontStyle: 'regular',
      fontWeight: 400,
      fontSize: '18px',
    },
    body2: {
      fontStyle: 'semiBold',
      fontWeight: 600,
      fontSize: '18px',
    },
    button: {
      fontStyle: 'light',
      fontWeight: 300,
      textTransform: 'none',
      fontSize: '18px',
    },
    caption: {
      fontStyle: 'bold',
      fontWeight: 700,
      fontSize: '18px',
    },
    overline: {
      fontStyle: 'light',
      fontWeight: 300,
    },
  },
})

export default theme
