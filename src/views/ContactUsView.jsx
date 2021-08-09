import React from 'react'
import { Box, CardMedia, Divider, Typography, Hidden } from '@material-ui/core'

import overview from '../assets/images/overview.jpeg'
import contactUsStyle from '../theme/contactUsView'

const ContactUsView = () => {
  const classes = contactUsStyle()
  return (
    <Box className={classes.containerBox}>
      <Hidden smDown >
        <CardMedia
          className={classes.img}
          component="img"
          image={overview}
          data-cy="image"
          alt="Bild av stad från ovan"
        />
      </Hidden>
      <Box className={classes.contactContainer}>
        <Box className={classes.contactInfo}>
          <Typography data-cy="phone" variant="h4">
            Telefon Nummer
          </Typography>
          <Divider className={classes.divider} />
          <Typography data-cy="phone-number" variant="h4">
            031-123-4567
          </Typography>
        </Box>
        <Box className={classes.contactInfo}>
          <Typography data-cy="email" variant="h4">
            E-post Address
          </Typography>
          <Divider className={classes.divider} />
          <Typography data-cy="email-address" variant="h4">
            jakob@timotuz.se
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactUsView
