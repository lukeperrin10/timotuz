import React from 'react'
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  Box,
  Hidden,
} from '@material-ui/core'
import logo_web_timotuz from '../assets/images/logo_web_timotuz.svg'
import logo_no_text from '../assets/images/logo_no_text.svg'
import PhoneIcon from '@material-ui/icons/Phone'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    bottom: 0,
    backgroundColor: theme.palette.grey[100],
    height: '20vh',
    width: '100%',
  },
  footer: {
    maxWidth: theme.breakpoints.values.lg,
  },
  logoButton: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  copyright: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    wordWrap: 'break-word',
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Box data-cy="footer" className={classes.footerContainer}>
      <Grid container item direction="row" className={classes.footer}>
        <Grid item container xs={4} sm={6} justifyContent="center">
          <Button
            disableRipple
            className={classes.logoButton}
            component={Link}
            to="/start"
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
            }
          >
            <Hidden xsDown>
              <img
                data-cy="logo"
                src={logo_web_timotuz}
                style={{ height: '72px' }}                
                alt="Timotuz Company Logo"
              />
            </Hidden>
            <Hidden smUp>
              <img
                data-cy="logo"
                src={logo_no_text}
                style={{ height: '64px' }}                
                alt="Timotuz Company Logo"
              />
            </Hidden>
          </Button>
        </Grid>
        <Grid
        data-cy="contacts"
          item
          container
          direction="column"
          xs={8}
          sm={6}
          alignContent="center"
          justifyContent="center"
        >
          <Typography data-cy="header" variant="h5" color="secondary" gutterBottom>
            Kontakta oss
          </Typography>
          <Typography data-cy="email" variant="body1" gutterBottom>
            email: jacob@fastigheter.se
          </Typography>
          <Button
            variant="outlined"
            disableElevation
            className={classes.phoneButton}
            href="tel:+46 31-123-4567"
            data-cy="phone"
          >
            <PhoneIcon style={{ marginRight: '1rem' }} />
            <Typography>031-123-4567</Typography>
          </Button>
        </Grid>
      </Grid>
      <Box className={classes.copyright}>2021 All Rights Reserved</Box>
    </Box>
  )
}

export default Footer
