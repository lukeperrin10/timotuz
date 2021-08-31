import React, { useState } from 'react'
import {
  Grid,
  Typography,
  CardMedia,
  Divider,
  ButtonBase,
} from '@material-ui/core'
import propertySectionStyle from '../theme/themePropertiesSection'
import Slider from './Slider'
import ReactBnbGallery from 'react-bnb-gallery'
const PropertyCard = ({ property }) => {
  const { address, description, images } = property
  const classes = propertySectionStyle()
  const [slideShow, setSlideShow] = useState(false)

  const listOfImages = images.map((image) => (
    <ButtonBase onClick={() => setSlideShow(true)}>
      <CardMedia
        className={classes.imageSlider}
        component="img"
        image={image.url}
        data-cy="property-image"
        alt={image.alt}
        key={image.id}
      />
    </ButtonBase>
  ))

  return (
    <>
      <ReactBnbGallery show={slideShow} photos={images} zIndex={2000} />
      <Grid
        data-cy="property"
        container
        item
        xs={12}
        className={classes.propertyRow}
      >
        <Grid item container justifyContent="center" lg={5}>
          <Slider autoPlay={false} animation="fade">
            {listOfImages}
          </Slider>
        </Grid>
        <Grid container item lg={5} className={classes.textContent}>
          <Typography
            className={classes.header}
            data-cy="property-address"
            variant="h5"
            gutterBottom
          >
            {address}
          </Typography>
          <Typography data-cy="property-description" variant="subtitle1">
            {description}
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </>
  )
}

export default PropertyCard
