import React, { useState } from 'react';
import {
  Grid,
  Typography,
  CardMedia,
  Divider,
  IconButton,
} from '@material-ui/core';
import propertySectionStyle from '../theme/themePropertiesSection';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const PropertyCard = ({ property }) => {
  const { address, description, images } = property;
  const [activeSlide, setActiveSlide] = useState(1);
  const classes = propertySectionStyle();

  const sliderHandler = (action) => {
    let slide = activeSlide;
    switch (action) {
      case 'nextSlide':
        if (++slide === images.length + 1) {
          setActiveSlide(1);
        } else {
          setActiveSlide(++slide);
        }
        break;
      case 'previousSlide':
        if (--slide === 0) {
          setActiveSlide(images.length);
        } else {
          setActiveSlide(--slide);
        }
        break;
      default:
        return;
    }
  };

  const sliderButton = (direction) => (
    <IconButton
      onClick={() => {
        sliderHandler(direction === 'next' ? 'nextSlide' : 'previousSlide');
      }}>
      {direction === 'next' ? (
        <ChevronRightIcon className={classes.sliderButton} fontSize='large' />
      ) : (
        <ChevronLeftIcon className={classes.sliderButton} fontSize='large' />
      )}
    </IconButton>
  );

  return (
    <>
      <Grid
        data-cy='property'
        container
        item
        xs={12}
        className={classes.propertyRow}>
        <Grid item lg={5}>
          {sliderButton('next')}
          <AnimatePresence initial={false}>
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}>
              <CardMedia
                className={classes.image}
                component='img'
                image={images[activeSlide].url}
                data-cy='property-image'
                alt={images[activeSlide].alt}
              />
            </motion.div>
          </AnimatePresence>
          {sliderButton('previous')}
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
