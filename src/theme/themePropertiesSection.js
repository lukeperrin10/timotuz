import { makeStyles } from '@material-ui/core'

const propertySectionStyle = makeStyles((theme) => ({
  viewContainer: {
    [theme.breakpoints.up('xs')]: {
      marginTop: '7px',
      padding: '0',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '14px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '4rem',
      padding: '0 24px',
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
  propertyRow: {
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'center',
      maxWidth: '1740px',
      margin: 'auto',
      padding: '0 0 50px 0',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '110px 0',
    },
  },
  imageContainer: {
    [theme.breakpoints.up('lg')]: {
      minHeight: '600px',
      maxHeight: '600px',
      maxWidth: '600px',
      minWidth: '600px',
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

  imageFullScreen: {
    height: '100%',
    position: 'absolute',
    left: 0,
    width: '100%',
    overflow: 'hidden',
  },
  textContent: {
    [theme.breakpoints.up('xs')]: {
      padding: '20px 30px',
      height: 'auto',
      alignItems: 'flex-start',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '30px 100px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '30px 150px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '18px',
      marginLeft: '40px',
      width: 'auto',
    },
  },
  district: {
    [theme.breakpoints.up('xs')]: {
      paddingBottom: '4px',
      marginBottom: '32px',
      textTransform: 'uppercase',
      borderBottom: '2px solid #000',
    },
  },
  name: {
    [theme.breakpoints.up('xs')]: {
      paddingBottom: '1rem',
      fontSize: '1.5rem',
    },
  },
  description: {
    [theme.breakpoints.up('xs')]: {
      whiteSpace: 'pre-wrap',
    },
    [theme.breakpoints.up('md')]: {
      whiteSpace: 'none',
    },
    '@media (min-width: 1600px)': {
      whiteSpace: 'pre-wrap',
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
    margin: 'auto 10px',
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    opacity: '0.5',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      opacity: '1',
    },
  },
}))

export default propertySectionStyle
