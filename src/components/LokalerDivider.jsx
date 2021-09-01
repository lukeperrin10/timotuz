import React from 'react'
import { Box, Typography, CardMedia, Container } from '@material-ui/core'
import fastigheterView from '../theme/fastigheterView'
import lokaler_divider_image from '../assets/images/lokaler_divider_image.jpg'

const FastigheterHero = () => {
  const classes = fastigheterView()

  return (
    <Box className={classes.section}>
      <CardMedia
        className={classes.image}
        component='img'
        image={lokaler_divider_image}
        data-cy='hero-img'
        alt='Fågelperspektiv över det historiska distriktet'
      />
      <Box data-cy='shadow-box' className={classes.shadowBox}>
        <Container className={classes.content}>
          <Typography className={classes.textFirst} variant='h1'>
            Lokaler
          </Typography>
          <Typography className={classes.textSecond} variant='h4'>
            Genom att välja attraktiva lägen i Skåne där vi förstår marknaden
            bäst kan vi erbjuda dig rätt fastighet för din verksamhet. Vår
            lokala närvaro med max 1h ställtid innebär att vi kan upprätthålla
            god service och vi sätter en ära i att återkoppla och planera
            förändringar tätt ihop med våra hyresgäster.
            <br />
            <br />
            För oss är det viktigt att standarden i våra kontors- och
            industrilokaler tål att synas, och vi jobbar kontinuerligt med
            underhåll och förbättringar. Hyresgästernas behov är nyckeln för
            långa relationer mellan våra fastigheter och de duktiga företagare
            som växer däri.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default FastigheterHero
