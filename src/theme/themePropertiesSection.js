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
      padding: '50px 30px',
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
  iconButton: {
    height: '50px',
    width: '40px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  sliderButton: {
    height: '50px',
    width: '40px',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
  sliderButtonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '50%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      transform: 'translateY(-50%)',
    },
    [theme.breakpoints.up('md')]: {
      transform: 'translateY(-50%) scaleX(1.07)',
    },
  }
}))

export default propertySectionStyle
