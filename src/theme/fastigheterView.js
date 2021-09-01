import { makeStyles } from '@material-ui/core'

const fastigheterView = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up('xs')]: {
      position: "relative",
      height: '100vh',
      minHeight: '284px',
      marginTop: '6vh',
    },
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
    },
  },
  image: {
    [theme.breakpoints.up('xs')]: {
      height: '100%',
    },
  },
  shadowBox: {
    [theme.breakpoints.up('xs')]: {
      height: '100vh',
      minHeight: '284px',
      width: '100vw',
      position: 'absolute',
      backgroundColor: 'rgba(7, 55, 59, 0.75)',
      top: '0px',
      left: '0px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
    },
  },
  content: {
    [theme.breakpoints.up('xs')]: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.primary.contrastText,
    },
  },
  textFirst: {
    [theme.breakpoints.up('xs')]: {
      letterSpacing: '-1px',
      marginBottom: '32px',
      fontSize: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
      letterSpacing: '-3px',
      marginBottom: '64px',
      fontSize: '3rem',
    },
  },
  textSecond: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.5rem',
      textAlign: 'center',
      margin: '0 20px 0 20px'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
    },
  },
}))

export default fastigheterView
