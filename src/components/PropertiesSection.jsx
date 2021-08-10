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
    <Box data-cy="property-section">
      <Box className={classes.headerTextContainer}>
        <Typography
          data-cy="properties-header"
          color="secondary"
          variant="h4"
          gutterBottom
        >
          Fastigheter
        </Typography>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
          distinctio!
        </Typography>
      </Box>
      <Slider>{property}</Slider>    
      <Box className={classes.button}>
        <Button
          data-cy="show-more-btn"
          variant="outlined"
          color="secondary"
          component={Link}
          to="/fastigheter"
        >
          Show more
        </Button>
      </Box>
    </Box>
  )
}

export default PropertiesSection
