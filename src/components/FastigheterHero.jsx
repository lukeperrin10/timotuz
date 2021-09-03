import React from 'react'
import { Box, Typography, CardMedia } from '@material-ui/core'
import fastigheterView from '../theme/fastigheterView'
import overview from '../assets/images/2_covered_3.jpg'

const FastigheterHero = () => {
  const classes = fastigheterView()

  return (
    <Box className={classes.section}>
      <CardMedia
        className={classes.image}
        component='img'
        image={overview}
        data-cy='hero-img'
        alt='Fågelperspektiv över det historiska distriktet'
      />
      <Box data-cy='shadow-box' className={classes.shadowBox}>
        <Box className={classes.circle}>
          <Typography variant='h4' className={classes.circleText}>
            Fastigheter med hög standard i centrala lägen
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default FastigheterHero
