import React from 'react'
import {
  Hidden,
  Container,
  Box,
  CardMedia,
  Typography,
  Divider,
} from '@material-ui/core'
import contact from '../assets/images/contact_01.jpg'
import contactUsStyle from '../theme/contactUsView'

const ContactUsView = () => {
  const classes = contactUsStyle()
  return (
    <Container className={classes.containerBox}>
      <CardMedia
        className={classes.img}
        component='img'
        image={contact}
        data-cy='image'
        alt=''
      />
      <Box className={classes.shadowBox}>
        <Box className={classes.contactText}>
          <Typography className={classes.heading} data-cy='text' variant='h2'>
            välkommen att höra av dig
          </Typography>
        </Box>
        <Box className={classes.contactInfo}>
          <Typography
            className={classes.text}
            data-cy='phone-number'
            variant='h3'>
            040 - 68 59 400
          </Typography>
          <Hidden mdDown>
            <Divider orientation='vertical' />
          </Hidden>
          <Typography
            className={classes.text}
            data-cy='email-address'
            variant='h3'>
            info@timotuz.com
          </Typography>
          <Hidden mdDown>
            <Divider orientation='vertical' />
          </Hidden>
          <Typography
            className={classes.text}
            data-cy='address'
            variant='h3'>
            box 20, 239 21 skanör
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default ContactUsView
