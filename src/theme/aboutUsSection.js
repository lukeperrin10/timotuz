import { makeStyles } from '@material-ui/core'

const aboutUsStyle = makeStyles((theme) => ({
  contentContainer: {
    [theme.breakpoints.up('xs')]: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.up('lg')]: {
      height: '570px',
      marginBottom: '80px',
    },
  },

  shadowBox: {
    [theme.breakpoints.up('xs')]: {
      height: '370px',
      left: '0px',
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'rgba(15, 15, 15, 0.2)',
    },
    [theme.breakpoints.up('sm')]: {
      height: '800px',
    },
  },

  imageContainer: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },

    [theme.breakpoints.up('lg')]: {
      width: '50%',
      height: '570px',
    },
  },

  image: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '370px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '800px',
    },

    [theme.breakpoints.up('lg')]: {
      height: '100%',
    },
  },

  textContainer: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      backgroundColor: theme.palette.primary.main,
      height: '550px',
      textAlign: 'left',
    },
    [theme.breakpoints.up('sm')]: {
      height: '400px',
    },

    [theme.breakpoints.up('lg')]: {
      paddingTop: '40px',
      width: '50%',
      height: '100%',
    },
  },

  textContent: {
    color: '#fff',
    letterSpacing: '0px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('xs')]: {
      padding: '50px 30px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '30px 100px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '20px 150px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '2% 30% 60px 8%  ',
    },
  },

  header: {
    color: '#fff',
    fontStyle: 'light',
    [theme.breakpoints.up('xs')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '55px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '45px',
      marginBottom: '20px',
    },
  },

  aboutUsText: {
    paddingBottom: '20px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.1rem',
      margin: 'auto',
      textAlign: 'left',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '10px',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '26px',
    },
  },

  button: {
    [theme.breakpoints.up('xs')]: {
      alignSelf: 'center',
      marginTop: '20px',
      color: '#fff',
      borderRadius: '0',
      borderColor: '#fff',
      width: '191px',
      height: '50px',
      fontSize: '18px',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    [theme.breakpoints.up('lg')]: {
      alignSelf: 'flex-start',
    },
  },
}))

export default aboutUsStyle
