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
      backgroundColor: 'rgba(15, 15, 15, 0.3)',
      top: '0',
      left: '0',
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
      alignItems: 'flex-start',
      marginLeft: '5%',
      color: theme.palette.primary.contrastText,
    },
  },
  textFirst: {
    [theme.breakpoints.up('xs')]: {
      letterSpacing: '-1px',
      marginBottom: '10px',
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      letterSpacing: '-2px',
      marginBottom: '15px',
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },

  textSecond: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
      letterSpacing: '-2px',
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  },
  heroButton: {
    [theme.breakpoints.up('xs')]: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      margin: '1.5rem 0px',
      padding: '3px 1rem',
      borderRadius: '0',
      border: '2px solid #fff',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '2rem 6px',
      padding: '6px 2rem',
    },
  },
  heroButtonText: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
  },
}))

export default heroSectionStyle
