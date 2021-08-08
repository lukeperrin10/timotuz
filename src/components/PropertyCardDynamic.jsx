import React from 'react';
import { Grid, Typography, CardMedia, Divider } from '@material-ui/core';
import propertySectionStyle from '../theme/themePropertiesSection';
import { motion, AnimatePresence } from 'framer-motion';

const PropertyCard = ({ property, slider }) => {
  const { id, address, description, image } = property;
  const classes = propertySectionStyle();

  return (
    <>
      <Grid
        data-cy='property'
        container
        item
        xs={12}
        className={classes.propertyRow}>
        <Grid item lg={5}>
          <AnimatePresence initial={false}>
            <motion.div
              key={slider}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}>
              <CardMedia
                className={classes.image}
                component='img'
                image={image.url}
                data-cy='property-image'
                alt={image.alt}
              />
            </motion.div>
          </AnimatePresence>
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
