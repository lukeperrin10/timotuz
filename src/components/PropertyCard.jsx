import React from 'react';
import { Grid, Typography, CardMedia, Box, Container } from '@material-ui/core';
import propertySectionStyle from '../theme/themePropertiesSection';

const PropertyCard = ({ property }) => {
  const { id, address, description, image } = property;
  const classes = propertySectionStyle();
  return (
    <Container maxWidth='xl' >
      <Grid
        data-cy={`property-${id}`}
        container
        item
        xs={12}
        className={classes.propertyRow}>
        <Grid item lg={5}>
          <Box className={classes.imageSlider}>
            <CardMedia
              className={classes.image}
              component='img'
              image={image.url}
              data-cy='property-image'
              alt={image.alt}
            />
          </Box>
        </Grid>
        <Grid item lg={5} className={classes.textContent}>
          <Typography className={classes.header} data-cy='property-address' variant='h5' gutterBottom>
            {address}
          </Typography>
          <Typography data-cy='property-description' variant='subtitle1'>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PropertyCard;
