import { makeStyles } from '@material-ui/core'

const contactUsStyle = makeStyles((theme) => ({
  containerBox: {
    [theme.breakpoints.up('xs')]: {
      height: '40vh',
      width: '100vw',
    },
  },
  img: {
    [theme.breakpoints.up('xs')]: {
      width: '100vw',
      height: '40vh',
      position: 'absolute',
      top: '0',
      left: '0',
    },
  },
  shadowBox: {
    [theme.breakpoints.up('xs')]: {
      height: '40vh',
      minHeight: '284px',
      width: '100vw',
      position: 'absolute',
      backgroundColor: 'rgba(7, 55, 59, 0.60)',
      top: '0',
      left: '0',
      color: theme.palette.primary.contrastText,
    },
  },
  contactText: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '30vh',
      fontSize: '38px',
      width: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '40vh',
      fontSize: '38px',
      margin: 'auto',
    },
  },
  contactInfo: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '500px',
      margin: '0px 100px',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '100px',
      margin: '0px 70px',
    },
  },
  heading: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '24px',
      paddingBottom: '24px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.7rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.4rem',
    },
  },
  text: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.6rem',
      fontStyle: 'regular',
      fontWeight: 400,
    },
  },
  bodySection: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1200px',
    margin: '4rem auto',
  },
}))

export default contactUsStyle
