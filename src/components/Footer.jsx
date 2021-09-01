import React from 'react'
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  Box,
  Hidden,
} from '@material-ui/core'
import logo_web_timotuz from '../assets/images/logo_web_timotuz_white.svg'
import logo_no_text from '../assets/images/logo_no_text_white.svg'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100vw',
    height: '339px',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    textAlign: 'right',
  },
  footerGrid: {
    [theme.breakpoints.up('xs')]: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column-reverse',
      flexWrap: 'nowrap',
      alignItems: 'center',
      bottom: 0,
      height: '100%',
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },
  copyright: {
    position: 'absolute',
    bottom: 0,
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Box data-cy='footer' className={classes.footer}>
      <Grid container direction='row' className={classes.footerGrid}>
        <Grid item container sm={12} md={5} justifyContent='center'>
          <Button
            disableRipple
            className={classes.logoButton}
            component={Link}
            to='/start'
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
            }>
            <Hidden xsDown>
              <img
                data-cy='logo'
                src={logo_web_timotuz}
                style={{ height: '72px' }}
                alt='Timotuz Company Logo'
              />
            </Hidden>
            <Hidden smUp>
              <img
                data-cy='logo'
                src={logo_no_text}
                style={{ height: '64px' }}
                alt='Timotuz Company Logo'
              />
            </Hidden>
          </Button>
        </Grid>
        <Grid sm={12} md={5}
          data-cy='contacts'
          item
          container
          direction='column'
          alignContent='center'
          justifyContent='center'>
          <Typography data-cy='header' variant='h5' gutterBottom>
            Kontakta oss
          </Typography>
          <Typography data-cy='phone' variant='h6'>
            040 - 68 59 400
          </Typography>
          <Typography data-cy='email' variant='h6' gutterBottom>
            info@timotuz.com
          </Typography>
          <Typography data-cy='address' variant='h6' gutterBottom>
            Box 20, 239 21 Skanör
          </Typography>
        </Grid>
      </Grid>
      <Typography variant='body1' className={classes.copyright}>
        2021 All Rights Reserved
      </Typography>
    </Box>
  )
}

export default Footer
