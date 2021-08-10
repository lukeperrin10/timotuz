import { makeStyles } from '@material-ui/core'

const aboutUsStyles = makeStyles((theme) => ({
  pageBox: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '70px',
      marginBottom: '20px',
      padding: '0',
    },
  },

  header: {
    marginBottom: '50px',
  },

  textContainer: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      margin: '100px 0',
      padding: '70px 30px 70px 30px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 400px',
    },
  },

  textContainerDark: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      padding: '150px 30px 150px 30px',
      backgroundColor: '#ddd',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '70px 400px',
    },
  },
}))

export default aboutUsStyles
