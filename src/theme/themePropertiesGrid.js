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
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '56px',
      marginBottom: '114px',
    },
  },
  gridRow: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      alignItems: 'center',
    },
    [theme.breakpoints.up('lg')]: {},
  },
  gridItem: {
    [theme.breakpoints.up('xs')]: {
      width: '346px',
      height: '248px',
      margin: '27px',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      width: '346px',
      height: '248px',
      margin: '27px',
      justifyContent: 'center',
    },
  },

  gridItemCenter: {
    [theme.breakpoints.up('xs')]: {
      width: '100vw',
      height: '550px',
      margin: '27px',
    },
    [theme.breakpoints.up('sm')]: {
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
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    border: 'solid #fff 2px',
    margin: 'auto',
    padding: '65px 35px',
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
    width: '346px',
    height: '248px',
    position: 'absolute',
    backgroundColor: 'rgba(15, 15, 15, 0.2)',
  },

  // shadowBoxCenter: {
  //   [theme.breakpoints.up('xs')]: {
  //     width: '100vw',
  //     height: '550px',
  //     position: 'absolute',
  //     backgroundColor: 'rgba(15, 15, 15, 0.2)',
  //   },
  //   [theme.breakpoints.up('sm')]: {
  //     width: '346px',
  //   },
  // },

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
