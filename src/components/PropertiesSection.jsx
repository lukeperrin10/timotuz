import React from 'react';
import { Box, Grid, Typography, Divider, Button } from '@material-ui/core';

import properties from '../data/fixtures/properties';
import PropertyCard from './PropertyCard';
import propertySectionStyle from '../theme/themePropertiesSection';

const PropertiesSection = () => {
  const classes = propertySectionStyle();
  const property = properties.map((property, id) => {
    return <PropertyCard property={property} key={id} />;
  });

  return (
    <Box data-cy='property-section'>
      <Box className={classes.headerTextContainer}>
        <Typography
          data-cy='properties-header'
          color='primary'
          variant='h4'
          gutterBottom>
          Fastigheter
        </Typography>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
          distinctio!
        </Typography>
      </Box>
      <Divider className={classes.divider} />
      <Grid container>{property}</Grid>
      <Box className={classes.button}>
        <Button data-cy='show-more-btn' variant='outlined' color='primary'>
          Show more
        </Button>
      </Box>
    </Box>
  );
};

export default PropertiesSection;
