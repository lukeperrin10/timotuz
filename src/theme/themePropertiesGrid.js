import { makeStyles } from '@material-ui/core'

const propertyGridStyle = makeStyles((theme) => ({
  gridContainer: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '56px',
      marginBottom: '114px',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
  },

  gridRow: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      alignItems: 'center',
    },
  },

  gridItem: {
    [theme.breakpoints.up('xs')]: {
      width: '346px',
      height: '248px',
      margin: '27px',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      width: '460px',
      height: '304px',
    },
    [theme.breakpoints.up('md')]: {
      width: '692px',
      height: '456px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '346px',
      height: '248px',
    },
  },

  gridItemCenter: {
    [theme.breakpoints.up('xs')]: {
      width: '100vw',
      height: '550px',
      margin: '27px',
    },

    [theme.breakpoints.up('lg')]: {
      width: '346px',
      height: '550px',
    },
  },

  centerText: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },

  outerBox: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '100%',
  },

  innerBox: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      border: 'solid #fff 2px',
      margin: 'auto',
      padding: '65px 35px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '88px 35px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '164px 35px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '65px 35px',
    },
  },

  firstText: {
    marginBottom: '18px',
  },

  phoneNumber: {
    marginTop: '18px',
    fontSize: '1.5rem',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  shadowBox: {
    [theme.breakpoints.up('xs')]: {
      width: '346px',
      height: '248px',
      position: 'absolute',
      backgroundColor: 'rgba(15, 15, 15, 0.2)',
      textDecoration: 'none',
      color: theme.palette.primary.contrastText,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: '45px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '460px',
      height: '304px',
      paddingTop: '57px',
    },
    [theme.breakpoints.up('md')]: {
      width: '692px',
      height: '456px',
      paddingTop: '96px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '346px',
      height: '248px',
      paddingTop: '45px',
    },
  },

  shadowBoxCenter: {
    [theme.breakpoints.up('xs')]: {
      width: '100vw',
      height: '550px',
      position: 'absolute',
      backgroundColor: 'rgba(15, 15, 15, 0.2)',
      textDecoration: 'none',
      color: theme.palette.primary.contrastText,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: '45px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '57px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '96px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '346px',
      paddingTop: '45px',
    },
  },

  city: {
    borderBottom: 'solid 2px',
    textTransform: 'uppercase',
    marginBottom: '22px',
    fontSize: '18px',
    letterSpacing: '2px',
  },
  address: {
    fontSize: '24px',
    letterSpacing: '-0.5px',
  },

  button: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      border: 'solid #fff 2px',
      borderRadius: '0px',
      width: '191px',
      height: '50px',
      margin: 'auto',
    },
  },
  buttonText: {
    [theme.breakpoints.up('xs')]: {
      color: theme.palette.primary.contrastText,
    },
  },
}))

export default propertyGridStyle