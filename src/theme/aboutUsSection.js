import { makeStyles } from '@material-ui/core';

const aboutUsStyle = makeStyles((theme) => ({
  contentContainer: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '100px 30px 50px 30px',
      backgroundColor: '#ddd'
    },
  },
  image: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '300px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '900px',
      height: '400px',
    },
    [theme.breakpoints.up('md')]: {
      width: '450px',
      height: '450px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '1000px',
      height: '400px',
      paddingLeft: '150px'
    },
  },
  textContent: {
    [theme.breakpoints.up('xs')]: {
      padding: '30px 30px',
      height: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '30px 100px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '30px 150px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '40px 400px',
      marginLeft: '40px',
      width: 'auto',
    },
  },
}));

export default aboutUsStyle;