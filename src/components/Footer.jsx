import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Typography, Box } from '@material-ui/core'

import logo_web_timotuz from '../assets/images/logo_web_timotuz_white.svg'
import footerStyle from '../theme/themeFooter'

const Footer = () => {
  const classes = footerStyle()
  return (
    <Box data-cy='footer' className={classes.footer}>
      <Grid container direction='column'>
        <Grid item container direction='row' className={classes.footerGrid}>
          <Grid item container xs={12} sm={6} justifyContent='center'>
            <Button
              disableRipple
              className={classes.logoButton}
              component={Link}
              to='/hem'
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                })
              }>
              <img
                data-cy='logo'
                src={logo_web_timotuz}
                style={{ height: '72px' }}
                alt='Timotuz Company Logo'
              />
            </Button>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            data-cy='contacts'
            item                    
            className={classes.contactsContainer}>
            <Grid item className={classes.contactsGrid}>
              <Typography
                data-cy='phone'
                variant='body2'
                className={classes.contactUsContent}
                gutterBottom>
                040 - 68 59 400
              </Typography>
            </Grid>
            <Grid item className={classes.contactsGrid}>
              <Typography
                data-cy='email'
                variant='body2'
                className={classes.contactUsContent}
                gutterBottom>
                info@timotuz.com
              </Typography>
            </Grid>
            <Grid item className={classes.contactsGrid}>
              <Typography
                data-cy='address'
                variant='body2'
                className={classes.contactUsContent}
                gutterBottom>
                Box 20, 239 21 Skanör
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justifyContent='center'>
          <Typography variant='overline'>
            © Copyright 2020 Timotuz AB
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
