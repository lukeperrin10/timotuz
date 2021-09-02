import { makeStyles } from '@material-ui/core'

const aboutUsStyles = makeStyles((theme) => ({
  contentContainer: {
    [theme.breakpoints.up('lg')]: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'row',
    },
  },

  imageContainer: {
    [theme.breakpoints.up('lg')]: {
      width: '50%',
    },
  },

  textContainer: {
    [theme.breakpoints.up('xs')]: {
      padding: '2%',
      backgroundColor: theme.palette.primary.main,
      textAlign: 'left',
    },

    [theme.breakpoints.up('lg')]: {
      paddingTop: '7%',
      width: '50%',
    },
  },

  aboutUsText: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'left',
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
  textContent: {
    color: '#fff',
    [theme.breakpoints.up('xs')]: {
      padding: '10%',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '2% 10% 2% 8%  ',
    },
  },

  header: {
    color: '#fff',
    fontStyle: 'light',
    [theme.breakpoints.up('xs')]: {
      fontSize: '38px',
      margin: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: '20px',
      fontSize: '2.4rem',
    },
  },

  shadowBox: {
    [theme.breakpoints.up('xs')]: {
      height: '370px',
      left: '0px',
      position: 'absolute',
      display: 'flex',
      width: '100vw',
      backgroundColor: 'rgba(15, 15, 15, 0.2)',
    },
    [theme.breakpoints.up('sm')]: {
      height: '800px',
    },
  },
}))

export default aboutUsStyles
