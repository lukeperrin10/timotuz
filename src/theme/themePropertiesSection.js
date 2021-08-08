import { makeStyles } from '@material-ui/core';

const propertySectionStyle = makeStyles((theme) => ({
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
  image: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '375px',
      position: 'absolute'
    },
    [theme.breakpoints.up('sm')]: {
      width: '400px',
      height: '400px',
    },
    [theme.breakpoints.up('md')]: {
      width: '450px',
      height: '450px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '600px',
      height: '600px',
      
    },
  },
  textContent: {
    [theme.breakpoints.up('xs')]: {
      padding: '20px 30px',
      height: 'auto',
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
    height: "100%",
    width: "40px",
    color: theme.palette.primary,
  }
}));

export default propertySectionStyle;
