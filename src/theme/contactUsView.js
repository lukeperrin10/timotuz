import { makeStyles } from '@material-ui/core'

const contactUsStyle = makeStyles((theme) => ({
  containerBox: {
    [theme.breakpoints.up('xs')]: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  img: {
    [theme.breakpoints.up('xs')]: {
      width: '40%',
      height: '100%',
    },
  },
  contactContainer: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      margin: '0 auto'
    },
  },
  contactInfo: {
    [theme.breakpoints.up('xs')]: {
      margin: '40px 0',
    },
  },
  divider: {
    [theme.breakpoints.up('xs')]: {
      height: '2px',
      backgroundColor: theme.palette.secondary.main,
      margin: '10px 0'
    },
  }
}))

export default contactUsStyle
