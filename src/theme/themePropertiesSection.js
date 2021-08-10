import { makeStyles } from '@material-ui/core'

const propertySectionStyle = makeStyles((theme) => ({
  viewContainer: {
    [theme.breakpoints.up('xs')]: {
      marginTop: '7px',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '14px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '4rem',
    },
  },
  headerTextContainer: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      marginTop: '13vh',
      marginBottom: '10vh',
      padding: '50px 30px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '50px 400px',
      marginBottom: '10vh',
    },
  },
  header: {
    [theme.breakpoints.up('xs')]: {
      paddingBottom: '15px',
    },
  },
  propertyRow: {
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px 0',
    },
  },
  imageSlider: {
    [theme.breakpoints.up('xs')]: {
      width: '100vw',
      height: '375px',
      position: 'relative',
    },
    [theme.breakpoints.up('sm')]: {
      height: '400px',
    },
    [theme.breakpoints.up('md')]: {
      height: '450px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      maxWidth: '600px',
      height: '600px',
    },
  },
  image: {
    position: 'absolute',
    height: '100%',
  },
  imageMobile: {
    height: '100%',
  },
  textContent: {
    [theme.breakpoints.up('xs')]: {
      padding: '20px 30px',
      height: 'auto',
      alignItems: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '30px 100px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '30px 150px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '30px 30px',
      marginLeft: '40px',
      width: 'auto',
    },
  },
  divider: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
  },
  button: {
    [theme.breakpoints.up('xs')]: {
      margin: '50px 0',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  sliderButton: {
    margin: '50% 10px',
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    opacity: "0.5",
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      opacity: "1",
    },
  },
}))

export default propertySectionStyle
