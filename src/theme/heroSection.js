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
      alignItems: 'flex-start',
      margin: '-2% 0 0 15%',
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
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    },
  },

}))

export default heroSectionStyle
