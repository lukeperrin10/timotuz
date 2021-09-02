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
      padding: '65px 5px',
    },
  },

  firstText: {
    marginBottom: '18px',
    fontSize: '18px',
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
      alignItems: 'left',
      paddingTop: '47%',
      paddingLeft: '5%',
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
      paddingTop: '13% ',
      paddingLeft: '1%',
    },
  },

  shadowBoxContactUs: {
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
      paddingBottom: '45px',
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
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '57px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '96px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '346px',
    },
  },

  cityBox: {
    width: '57%',
  },

  cityBoxTwo: {
    width: '45%',
  },
  cityBoxCenter: {
    width: '20%',
  },

  city: {
    borderBottom: 'solid 1.5px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  address: {
    fontSize: '1.4rem',
    letterSpacing: '-0.5px',
  },

  button: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      border: 'solid #fff 2px',
      borderRadius: '0px',
      width: '210px',
      height: '60px',
      margin: 'auto',
      backgroundColor: 'rgba(15, 15, 15, 0.4)',
    },
  },
  buttonText: {
    [theme.breakpoints.up('xs')]: {
      color: theme.palette.primary.contrastText,
    },
  },

  titleFirstBox: {
    fontSize: '24px',
    margin: 'auto',
  },
}))

export default propertyGridStyle
