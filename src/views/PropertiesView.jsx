import React, { useState } from 'react'
import properties_dynamic from '../data/fixtures/properties_dynamic'
import lokaler_fixture from '../data/fixtures/lokaler_fixture'
import PropertyCardDynamic from '../components/PropertyCardDynamic'
import { Grid, Container } from '@material-ui/core'
import propertySectionStyle from '../theme/themePropertiesSection'
import LargeSlideShow from '../components/LargeSlideShow'
import FastigheterHero from '../components/FastigheterHero'
import LokalerDivider from '../components/LokalerDivider'

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

  const lokaler = lokaler_fixture.map((lokale, id) => {
    let trueIfOdd = (id + 1) % 2 === 0
    return (
      <PropertyCardDynamic
        key={`lokaler-card-${id}`}
        property={lokale}
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
      <LokalerDivider />
      <Container maxWidth='xl' className={classes.viewContainer}>
        <Grid container>{lokaler}</Grid>
      </Container>
    </>
  )
}

export default PropertiesView
