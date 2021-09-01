import { makeStyles } from '@material-ui/core'

const aboutUsStyle = makeStyles((theme) => ({
  contentContainer: {
    [theme.breakpoints.up('lg')]: {
      height: '570px',
      width: '100vw',
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '80px',
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

  textContainer: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '450px',
      backgroundColor: '#00474C',
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      height: '450px',
      backgroundColor: '#00474C',
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '450px',
      backgroundColor: '#00474C',
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '40px',
      width: '50%',
      height: '100%',
      display: 'flex',
      textAlign: 'left',
      backgroundColor: '#00474C',
    },
  },

  aboutUsText: {
    
    paddingBottom: '20px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '18px',
      margin: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
      paddingTop: '10px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '28px',
      paddingTop: '26px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '18px',
    },
  },

  image: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '370px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      height: '800px',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '800px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      height: '100%',
    },
  },
  textContent: {
    color: '#fff',
    letterSpacing: '0px',
    [theme.breakpoints.up('xs')]: {
      padding: '50px 30px',
      height: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '30px 100px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '20px 150px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '80px 300px 0px 70px',
    },
  },

  header: {
    color: '#fff',
    alignContent: 'centre',
    fontStyle: 'light',
    [theme.breakpoints.up('xs')]: {
      fontSize: '40px',
      margin: 'auto',
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

  button: {
    marginTop: '20px',
    color: '#fff',
    borderRadius: '0',
    borderColor: '#fff',
    width: '191px',
    height: '50px',
    fontSize: '18px'
  },

  shadowBox: {
    [theme.breakpoints.up('xs')]: {
      height: '370px',
      left: '0px',
      position: 'absolute',
      width: '100vw',
      backgroundColor: 'rgba(15, 15, 15, 0.2)',
      textAlign: 'center',
      paddingTop: '160px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '800px',
      minHeight: '370px',
      backgroundColor: 'rgba(15, 15, 15, 0.2)',
      paddingTop: '350px',
    },
    [theme.breakpoints.up('md')]: {
      height: '800px',
      minHeight: '370px',
      backgroundColor: 'rgba(15, 15, 15, 0.2)',
      paddingTop: '350px',
    },
  },
}))

export default aboutUsStyle
