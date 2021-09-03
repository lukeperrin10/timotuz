import React, { useState } from 'react'
import properties_dynamic from '../data/fixtures/properties_dynamic'
import PropertyCardDynamic from '../components/PropertyCardDynamic'
import { Grid, Container } from '@material-ui/core'
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
    </>
  )
}

export default PropertiesView
