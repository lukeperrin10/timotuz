import { makeStyles } from '@material-ui/core'

const contactUsStyle = makeStyles((theme) => ({
  containerBox: {
    [theme.breakpoints.up('xs')]: {
      height: '100vh',
      width: '100vw',
    },
  },
  img: {
    [theme.breakpoints.up('xs')]: {
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      top: '6vh',
      left: '0',
    },
  },
  shadowBox: {
    [theme.breakpoints.up('xs')]: {
      height: '100vh',
      minHeight: '284px',
      width: '100vw',
      position: 'absolute',
      backgroundColor: 'rgba(7, 55, 59, 0.60)',
      top: '6vh',
      left: '0',
      color: theme.palette.primary.contrastText,
      textTransform: 'uppercase',
      
    },
  },
  contactText: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '20vh',
      fontSize: '38px',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
      fontSize: '38px',
    },
  },
  contactInfo: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '500px',
      margin: '0px 100px'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '100px',
      margin: '0px 150px'
    },
  },
  heading: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.7rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.2rem',
    },
  },
  text: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
    },
  },
}))

export default contactUsStyle
