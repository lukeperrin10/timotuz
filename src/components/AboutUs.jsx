import { Typography, Box, CardMedia } from '@material-ui/core'
import React from 'react'

import aboutUsStyle from '../theme/aboutUsSection'
import logo3d from '../assets/images/om_oss_3d.png'

const AboutUs = () => {
  const classes = aboutUsStyle()
  return (
    <Box
      data-cy="about-us-section"
      className={classes.contentContainer}
      id="about_us"
    >
      <Typography
        data-cy="about-us-header"
        color="secondary"
        variant="h4"
        gutterBottom
      >
        Vår Mission
      </Typography>
      <CardMedia
        className={classes.image}
        component="img"
        image={logo3d}
        data-cy="3d-logo"
        alt="Timotuz 3d logo"
      />
      <Typography
        data-cy="about-us-content"
        className={classes.textContent}
        variant="subtitle1"
      >
        Timotuz skall skapa platser för skåningar att växa och trivas på. Vi gör
        det genom att tillgodose bostads- och lokalbehov idag, men med ena foten
        in i morgondagens teknik och miljö. Vi ska hitta eller skapa fastigheter
        med stor värdepotential och utveckla dessa för ett lönsamt ägande och en
        hållbar framtid.
      </Typography>
    </Box>
  )
}

export default AboutUs
