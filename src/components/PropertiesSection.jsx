import React from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import properties from '../data/fixtures/properties'
import PropertyCard from './PropertyCard'
import Slider from './Slider'
import propertySectionStyle from '../theme/themePropertiesSection'

const PropertiesSection = () => {
  const classes = propertySectionStyle()
  const property = properties.map((property, id) => {
    return <PropertyCard property={property} key={id} />
  })

  return (
    <>
      <Box className={classes.headerTextContainer}>
        <Typography
          className={classes.header}
          data-cy="properties-header"
          color="secondary"
          variant="h4"
          gutterBottom
        >
          Våra fastigheter
        </Typography>
        <Typography variant="subtitle1">
          I dagsläget förvaltar vi fastigheter i Helsingborg, Malmö, Ystad och
          Limhamn och vår fastighetsportfölj utökas ständigt.
        </Typography>
      </Box>
      <Slider>{property}</Slider>    
      <Box className={classes.button}>
        <Button
          data-cy="våra-fastigheter-btn"
          variant="outlined"
          color="secondary"
          component={Link}
          to="/vara_fastigheter"
        >
          Alla våra fastigheter
        </Button>
      </Box>
      </>
  )
}

export default PropertiesSection
