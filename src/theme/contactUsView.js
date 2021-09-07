import { makeStyles } from '@material-ui/core'

const contactUsStyle = makeStyles((theme) => ({
  containerBox: {
    [theme.breakpoints.up('xs')]: {
      height: '385px',
      width: '100%',
    },
  },
  img: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '385px',
      position: 'absolute',
      top: '55px',
      left: '0',
      objectPosition: '100% 40%'
    },
  },
  shadowBox: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      height: '385px',
      width: '100%',
      position: 'absolute',
      backgroundColor: 'rgba(7, 55, 59, 0.60)',
      top: '3.4rem',
      left: '0',
      color: theme.palette.primary.contrastText,
    },
  },
  contactInfo: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      height: '20%',
      fontSize: '38px',
      width: '80%',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      width: '60%',
    },
  },
  heading: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.5rem',
      paddingBottom: '24px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
    },
  },
  text: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      margin: '1rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
    },
  },
  bodySection: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
      padding: '0 30px 100px 30px',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      padding: '0 20% 100px 20%',
    },
  },
  bodyHeading: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '2rem',
      marginTop: '8rem',
      marginBottom: '1rem',
      fontWeight: 600,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  },
  subHeading: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.5rem',
      marginTop: '1.5rem',
      fontWeight: 300,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  },
  bodyText: {
    marginTop: '18px',
  },
}))

export default contactUsStyle
