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
          <Typography data-cy="phone" variant="body2" className="classes.text">
            Telefonnummer
          </Typography>
          <Divider className={classes.divider} />
          <Typography data-cy="phone-number" variant="body2">
            031-123-4567
          </Typography>
        </Box>
        <Box className={classes.contactInfo}>
          <Typography data-cy="email" variant="body2">
            E-post
          </Typography>
          <Divider className={classes.divider} />
          <Typography data-cy="email-address" variant="body2">
            jakob@timotuz.se
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactUsView
