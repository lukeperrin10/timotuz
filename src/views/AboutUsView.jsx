import React from 'react'
import { Typography, Box, CardMedia, useMediaQuery } from '@material-ui/core'

import aboutUsStyles from '../theme/aboutUsView'
import people_2 from '../assets/images/people_2.jpg'

const AboutUsView = () => {
  const classes = aboutUsStyles()
  const desktop = useMediaQuery('(min-width:1265px)')
  return (
    <>
      <Box
        data-cy='about-us-section'
        className={classes.contentContainer}
        id='about_us'>
        {desktop ? undefined : (
          <Box className={classes.shadowBox}>
            <Typography className={classes.header}>Om oss</Typography>
          </Box>
        )}

        <Box className={classes.imageContainer}>
          <CardMedia
            component='img'
            image={people_2}
            className={classes.image}
          />
        </Box>
        <Box className={classes.textContainer}>
          <Box className={classes.textContent}>
            {desktop && (
              <Typography data-cy='about-us-header' variant='h2' className={classes.header}>
                Om oss
              </Typography>
            )}
            <Typography
              data-cy='about-us-text'
              className={classes.aboutUsText}
              variant='body1'>
              Timotuz har varit verksamt inom fastighetsbranschen sedan 2014.
              <br></br> <br></br> Vi förvärvar, förädlar, nyproducerar,
              exploaterar, äger och förvaltar hyresbostäder i Södra Sverige.
              Strategin är att i städer med tillväxtpotential förvärva
              befintliga bostadsfastigheter liksom mark för nyproduktion samt
              strategiskt belägna lager och logistikfastigheter.<br></br>
              <br></br>Bolagets nyproducerade bostäder är alltid ytsmarta där
              hållbarhet är vår ledstjärna med ett högt miljötänk. I våra
              projekt letar vi ständigt efter möjligheter att integrera
              teknologiska innovationer inom mobilitetsåtgärder, hållbarhet och
              effektiv användning av resurser bland de boende.<br></br>
              <br></br> Vi är lyhörda och jobbar alltid i ett nära samarbete med
              kommunen var sig det beträffar gestaltning, planritningar eller
              mobilitetsåtgärder.<br></br>
              <br></br> Timotuz är en långsiktigt fastighetsägare och finns idag
              etablerad i Malmö, Ystad och Helsingborg.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default AboutUsView
