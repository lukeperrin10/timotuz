import { makeStyles } from '@material-ui/core'

const footerStyle = makeStyles((theme) => ({
  footer: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '400px',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      height: 'auto',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      textAlign: 'right',
      padding: '38px 0 12px 0',
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
      paddingTop: '20px',
      bottom: 0,
      height: '100%',
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: '0',
    },
  },
  contactUsContent: {
    fontSize: '17px',
  },
  contactsContainer: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
  },
  contactsGrid: {
    [theme.breakpoints.up('xs')]: {
      padding: '24px 12px 24px 12px',
      borderBottom: '1px solid #fff',
      '&:last-child': {
        borderBottom: '0px solid #fff',
      },
    },
    [theme.breakpoints.up('lg')]: {
      padding: '8px 12px 6px 12px',
      borderRight: '1px solid #fff',
      borderBottom: '0px',
      '&:last-child': {
        borderRight: '0px',
      },
    },
  },
}))

export default footerStyle
