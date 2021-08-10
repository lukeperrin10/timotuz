import { makeStyles } from '@material-ui/core'

const heroSectionStyle = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up('xs')]: {
      height: '90vh',
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
      height: '100%',
      width: '65%',
      position: 'absolute',
      backgroundColor: 'rgba(15, 15, 15, 0.6)',
      top: '0px',
      left: '0px',
      paddingTop: '56px',
      paddingBottom: '99px',
      paddingLeft: '4%',
      paddingRight: '4%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
      left: '4%',
      paddingLeft: '1%',
      paddingRight: '1%',
    },
  },
  shadowBoxContent: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%'
    },
  },
  informationText: {
    [theme.breakpoints.up('xs')]: {
      color: '#eee',
      fontSize: '2rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.75rem',
    },
  },
  hoseIcon: {
    [theme.breakpoints.up('xs')]: {
      width: '50%',
      marginLeft: '20%',
      marginRight: '20%',
      marginTop: '25%',
    },
  },
  redInfoBox: {
    [theme.breakpoints.up('xs')]: {
      position: 'absolute',
      height: 'auto',
      width: '100%',
      textAlign: 'center',
      bottom: '0',
    },
  },
  infoGrid: {
    [theme.breakpoints.up('xs')]: {
      height: '100%',
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingTop: '0px',
      paddingBottom: '0px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '100%',
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
  },
  dataColumn: {
    [theme.breakpoints.up('xs')]: {
      marginBottom: '10px',
      marginTop: '10px',
    },
  },
  dataText: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.7rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.4rem',
    },
  },
}))

export default heroSectionStyle