import React from 'react'
import { Box, useMediaQuery, Typography, Button } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom'
import properties from '../data/fixtures/properties'
import PropertyCard from './PropertyCard'
import theme from '../theme/theme'
import propertySectionStyle from '../theme/themePropertiesSection'

const PropertiesSection = () => {
  const classes = propertySectionStyle()
  const property = properties.map((property, id) => {
    return <PropertyCard property={property} key={id} />
  })

  const mobile = useMediaQuery(theme.breakpoints.down('md'))

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
      <Carousel
        navButtonsProps={{
          style: { backgroundColor: theme.palette.secondary.main },
        }}
        navButtonsAlwaysVisible={mobile ? false : 'true'}
        animation="slide"
        timeout={750}
      >
        {property}
      </Carousel>
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
