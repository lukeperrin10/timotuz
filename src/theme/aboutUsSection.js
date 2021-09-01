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
      padding: '20px 30px',
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
    marginBottom: '20px',
  },

  button: {
    marginTop: '20px',
    color: '#fff',
    borderRadius: '0',
    borderColor: '#fff',
    width: '191px',
    height: '50px',
  },
}))

export default aboutUsStyle
