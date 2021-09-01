import React from 'react'
import {
  Grid,
  Typography,
  CardMedia,
  Divider,
  ButtonBase,
  Box,
  useMediaQuery,
} from '@material-ui/core'
import propertySectionStyle from '../theme/themePropertiesSection'
import theme from '../theme/theme'
import Slider from './Slider'

const PropertyCardDynamic = ({
  property,
  setSlideShow,
  setSlideShowData,
  border,
}) => {
  const { district, name, description, images } = property
  const classes = propertySectionStyle()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleClick = () => {
    setSlideShow(true)
    setSlideShowData(images)
  }

  const listOfImages = images.map((image) => (
    <ButtonBase key={`image${image.id}`} component='button' onClick={handleClick}>
      <CardMedia
        className={classes.imageSlider}
        component='img'
        image={image.photo}
        data-cy='property-image'
        alt={image.alt}
        
      />
    </ButtonBase>
  ))

  return (
    <>
      <Grid
        data-cy='property'
        container
        item
        xs={12}
        className={classes.propertyRow}
        style={border && !mobile ? { border: '3px solid #00474C' } : undefined}>
        <Grid item container justifyContent='center' lg={5}>
          <Slider autoPlay={false} animation='fade'>
            {listOfImages}
          </Slider>
        </Grid>
        <Grid
          container
          item
          lg={5}
          direction='column'
          className={classes.textContent}>
          <Typography
            className={classes.district}
            data-cy='property-district'
            variant='h5'
            gutterBottom>
            {district}
          </Typography>
          <Typography
            className={classes.name}
            data-cy='property-name'
            variant='h4'
            gutterBottom>
            {name}
          </Typography>
          <Typography
            data-cy='property-description'
            variant='subtitle1'
            className={classes.description}>
            {description}
          </Typography>
          <Box style={{ marginTop: '1rem' }}>
            {property.address && (
              <div>
                <Typography component='span'>
                  <b>Adress: </b>
                </Typography>
                <Typography component='span'>{property.address}</Typography>
              </div>
            )}
            {property.type && (
              <div>
                <Typography component='span'>
                  <b>Typ: </b>
                </Typography>
                <Typography component='span'>{property.type}</Typography>
              </div>
            )}
            {property.housing && (
              <div>
                <Typography component='span'>
                  <b>Bostäder: </b>
                </Typography>
                <Typography component='span'>{property.housing}</Typography>
              </div>
            )}
            {property.boa && (
              <div>
                <Typography component='span'>
                  <b>BOA: </b>
                </Typography>
                <Typography component='span'>{property.boa}</Typography>
              </div>
            )}
            {property.premises && (
              <div>
                <Typography component='span'>
                  <b>Lokaler: </b>
                </Typography>
                <Typography component='span'>{property.premises}</Typography>
              </div>
            )}
            {property.loa && (
              <div>
                <Typography component='span'>
                  <b>LOA: </b>
                </Typography>
                <Typography component='span'>{property.loa}</Typography>
              </div>
            )}
            {property.parking && (
              <div>
                <Typography component='span'>
                  <b>Parkering: </b>
                </Typography>
                <Typography component='span'>{property.parking}</Typography>
              </div>
            )}
            {property.standard && (
              <div>
                <Typography component='span'>
                  <b>Standard: </b>
                </Typography>
                <Typography component='span'>{property.standard}</Typography>
              </div>
            )}
            {property.other && (
              <div style={{ marginTop: '1rem' }}>
                <Typography component='span'>{property.other}</Typography>
              </div>
            )}
          </Box>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </>
  )
}

export default PropertyCardDynamic
