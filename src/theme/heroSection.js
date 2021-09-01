import { makeStyles } from '@material-ui/core'

const heroSectionStyle = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up('xs')]: {
      height: '90vh',
    },
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
    },
  },
  image: {
    [theme.breakpoints.up('xs')]: {
      height: '100%',
    },
  },
  shadowBox: {
    [theme.breakpoints.up('xs')]: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      backgroundColor: 'rgba(15, 15, 15, 0.2)',
      top: '0px',
      left: '0px',
    },
  },
 
}))

export default heroSectionStyle