import { makeStyles } from '@material-ui/core'

const footerStyle = makeStyles((theme) => ({
  footer: {
    [theme.breakpoints.up('xs')]: {
      width: '100vw',
      height: '700px',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      height: '339px',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      textAlign: 'right',
    },
  },
  footerGrid: {
    [theme.breakpoints.up('xs')]: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'space-evenly',
      flexWrap: 'nowrap',
      alignItems: 'center',
      paddingTop: "100px",
      bottom: 0,
      height: '100%',
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: "0",
    },
  },
  contactUs: {
    textTransform: 'uppercase',
    marginBottom: '40px',
    fontSize: '24px',
  },
  contactUsContent: {
    fontSize: '24px',
  },
  copyright: {
    position: 'absolute',
    bottom: 15,
  },
}))

export default footerStyle
