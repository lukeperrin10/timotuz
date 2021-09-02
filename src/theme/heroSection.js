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
      width: '100vw',
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
      alignItems: 'center',
      margin: '0',
      color: theme.palette.primary.contrastText,
    },
    [theme.breakpoints.up('lg')]: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      margin: '-9% 0 0 8%',
      color: theme.palette.primary.contrastText,
    },
  },
  textFirst: {
    [theme.breakpoints.up('xs')]: {
      letterSpacing: '-1px',
      marginBottom: '20px',
      fontSize: '2rem',
    },
    [theme.breakpoints.up('sm')]: {
      letterSpacing: '-3px',
      fontSize: '2.8rem',
    },
    [theme.breakpoints.up('md')]: {
      letterSpacing: '-3px',
      fontSize: '3.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      letterSpacing: '-3px',
      fontSize: '5rem',
    },
  },
  textSecond: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.5rem',
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      letterSpacing: '-3px',
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    },
  },
  heroButton: {
    margin: '2rem 6px',
    padding: '6px 4rem',
    borderRadius: '0',
    border: '3px solid #fff',
  },
  heroButtonText: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.2rem',
    },
  },
}))

export default heroSectionStyle
