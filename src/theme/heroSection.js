import { makeStyles } from '@material-ui/core'

const heroSectionStyle = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up('xs')]: {
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
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      backgroundColor: 'rgba(15, 15, 15, 0.2)',
      top: '0px',
      left: '0px',
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
      marginBottom: '40px',
      fontSize: '68px',
    },
    [theme.breakpoints.up('lg')]: {
      letterSpacing: '-3px',
      fontSize: '88px',
    },
  },
  textSecond: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '34px',
      textAlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '48px',
    },
  },

}))

export default heroSectionStyle
