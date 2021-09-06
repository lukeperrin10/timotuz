import React from 'react'
import {
  Grid,
  Typography,
  CardMedia,
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
    <ButtonBase
      key={`image${image.id}`}
      component='button'
      onClick={handleClick}>
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
        <Grid
          item
          container
          className={classes.imageContainer}
          justifyContent='center'
          lg={5}>
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
            variant='body2'
            gutterBottom>
            {district}
          </Typography>
          <Typography
            className={classes.name}
            data-cy='property-name'
            variant='body2'
            gutterBottom>
            {name}
          </Typography>
          <Typography
            data-cy='property-description'
            variant='body1'
            className={classes.description}>
            {description}
          </Typography>
          <Box style={{ marginTop: '1rem' }}>
            {property.address && (
              <div>
                <Typography variant='caption' component='span'>
                  Adress:{' '}
                </Typography>
                <Typography component='span'>{property.address}</Typography>
              </div>
            )}
            {property.type && (
              <div>
                <Typography variant='caption' component='span'>
                  Typ:{' '}
                </Typography>
                <Typography component='span'>{property.type}</Typography>
              </div>
            )}
            {property.housing && (
              <div>
                <Typography variant='caption' component='span'>
                  Bostäder:{' '}
                </Typography>
                <Typography component='span'>{property.housing}</Typography>
              </div>
            )}
            {property.boa && (
              <div>
                <Typography variant='caption' component='span'>
                  BOA:{' '}
                </Typography>
                <Typography component='span'>{property.boa}</Typography>
              </div>
            )}
            {property.premises && (
              <div>
                <Typography variant='caption' component='span'>
                  Lokaler:{' '}
                </Typography>
                <Typography component='span'>{property.premises}</Typography>
              </div>
            )}
            {property.loa && (
              <div>
                <Typography variant='caption' component='span'>
                  LOA:{' '}
                </Typography>
                <Typography component='span'>{property.loa}</Typography>
              </div>
            )}
            {property.parking && (
              <div>
                <Typography variant='caption' component='span'>
                  Parkering:{' '}
                </Typography>
                <Typography component='span'>{property.parking}</Typography>
              </div>
            )}
            {property.standard && (
              <div>
                <Typography variant='caption' component='span'>
                  Standard:{' '}
                </Typography>
                <Typography component='span'>{property.standard}</Typography>
              </div>
            )}
            {property.lager && (
              <div>
                <Typography variant='caption' component='span'>
                  Lager:{' '}
                </Typography>
                <Typography component='span'>{property.lager}</Typography>
              </div>
            )}
            {property.kontor && (
              <div>
                <Typography variant='caption' component='span'>
                  Kontor:{' '}
                </Typography>
                <Typography component='span'>{property.kontor}</Typography>
              </div>
            )}
            {property.other && (
              <div style={{ marginTop: '1rem' }}>
                <Typography component='span'>{property.other}</Typography>
              </div>
            )}
            {property.foradling && (
              <div style={{ marginTop: '1rem' }}>
                <Typography variant='caption' component='span'>
                  Förädling/exploatering:{' '}
                </Typography>
                <Typography component='span'>{property.foradling}</Typography>
              </div>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default PropertyCardDynamic
