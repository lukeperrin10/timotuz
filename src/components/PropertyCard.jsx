import React from 'react';
import { Grid, Typography, CardMedia, Divider } from '@material-ui/core';
import propertySectionStyle from '../theme/themePropertiesSection';

const PropertyCard = ({ property }) => {
  const { id, address, description, image } = property;
  const classes = propertySectionStyle();
  return (
    <>
      <Grid
        data-cy={`property-${id}`}
        container
        item
        xs={12}
        className={classes.propertyColumn}>
        <Grid item lg={5}>
          <CardMedia
            className={classes.image}
            component='img'
            image={image.url}
            data-cy='property-image'
            alt={image.alt}
          />
        </Grid>
        <Grid item lg={5} className={classes.textContent}>
          <Typography data-cy='property-address' variant='h5' gutterBottom>
            {address}
          </Typography>
          <Typography data-cy='property-description' variant='subtitle1'>
            {description}
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </>
  );
};

export default PropertyCard;
