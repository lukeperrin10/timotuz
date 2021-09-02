import { makeStyles } from '@material-ui/core'

const heroSectionStyle = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up('xs')]: {
      height: '40vh',
      minHeight: '284px',
      marginTop: '3.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
    },
  },
  image: {
    [theme.breakpoints.up('xs')]: {
      height: '100%',
    },
  },
  shadowBox: {
    [theme.breakpoints.up('xs')]: {
      height: '40vh',
      minHeight: '284px',
      width: '100%',
      position: 'absolute',
      backgroundColor: 'rgba(15, 15, 15, 0.2)',
      top: '3.5rem',
      left: '0px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
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
      marginBottom: '20px',
      fontSize: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
      letterSpacing: '-3px',
      fontSize: '5.5rem',
    },
  },
  textSecond: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.7rem',
      textAlign: 'center',
      margin: '0 20px'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    },
  },

}))

export default heroSectionStyle
