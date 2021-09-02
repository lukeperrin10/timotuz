import React from 'react'
import { Box, Typography, CardMedia, Container } from '@material-ui/core'
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

      {/* <Box data-cy='shadow-box' className={classes.shadowBox}>
        <Container className={classes.content}>
          <Typography className={classes.textFirst} variant='h2'>
            Bostäder
          </Typography>
          <Typography className={classes.textSecond} variant='h4'>
            Timotuz Fastigheter hyr ut och förvaltar bostäder i vackra och
            mysiga lägen runt om i Skåneregionen. Vi bedriver förvaltningen i
            egen regi med samarbetar med lokala entreprenörer som
            underleverantörer.
            <br />
            <br />
            Vi jobbar proaktivt med vår förvaltning där en medvetenhet om miljö
            och etiska principer alltid vägs in i de beslut vi tar för att möta
            hyresgästernas behov.
          </Typography>
        </Container>
      </Box> */}
    </Box>
  )
}

export default FastigheterHero
