import React, { useState } from 'react'
import properties_dynamic from '../data/fixtures/properties_dynamic'
import PropertyCardDynamic from '../components/PropertyCardDynamic'
import { Grid, Container, Box, Typography } from '@material-ui/core'
import propertySectionStyle from '../theme/themePropertiesSection'
import LargeSlideShow from '../components/LargeSlideShow'
import FastigheterHero from '../components/FastigheterHero'

const PropertiesView = () => {
  const classes = propertySectionStyle()
  const [slideShow, setSlideShow] = useState()
  const [slideShowData, setSlideShowData] = useState([])
  const property = properties_dynamic.map((property, id) => {
    let trueIfOdd = (id + 1) % 2 === 0
    return (
      <PropertyCardDynamic
        key={`fastigheter-card-${id}`}
        property={property}
        setSlideShow={setSlideShow}
        setSlideShowData={setSlideShowData}
        border={trueIfOdd}
      />
    )
  })

  return (
    <>
      <LargeSlideShow
        images={slideShowData}
        open={slideShow}
        setSlideShow={setSlideShow}
      />
      <FastigheterHero />
      <Container maxWidth='xl' className={classes.viewContainer}>
        <Grid container>{property}</Grid>
      </Container>
      <Box className={classes.headerTextContainer}>
        <Typography
          className={classes.header}
          data-cy='properties-header'
          color='secondary'
          variant='h4'
          gutterBottom>
          Lokaler
        </Typography>
        <Typography variant='subtitle1'>
          Genom att välja attraktiva lägen i Skåne där vi förstår marknaden bäst
          kan vi erbjuda dig rätt fastighet för din verksamhet. Vår lokala
          närvaro med max 1h ställtid innebär att vi kan upprätthålla god
          service och vi sätter en ära i att återkoppla och planera förändringar
          tätt ihop med våra hyresgäster. För oss är det viktigt att standarden
          i våra kontors- och industrilokaler tål att synas, och vi jobbar
          kontinuerligt med underhåll och förbättringar. Hyresgästernas behov är
          nyckeln för långa relationer mellan våra fastigheter och de duktiga
          företagare som växer däri. maila oss på …@timotuz.se
        </Typography>
      </Box>
    </>
  )
}

export default PropertiesView
