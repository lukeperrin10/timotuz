import React from 'react'
import {
  Box,
  Typography,
  CardMedia,
  Button,
  Grid,
  Container,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import propertyGridStyle from '../theme/themePropertiesGrid'
import helsingborg from '../assets/images/2_covered_3.jpg'
import fredrik from '../assets/images/pågåendeYstad/02.jpg'
import strutsen from '../assets/images/Limhamn/1.JPG'
import couple from '../assets/images/looking.jpg'

const PropertiesSection = () => {
  const classes = propertyGridStyle()

  return (
    <Container className={classes.gridContainer}>
      <Grid className={classes.gridRow} container>
        <Grid data-cy='second-box' className={classes.gridItem} item>
          <CardMedia
            className={classes.image}
            image={couple}
            data-cy='limhamn-img'
            alt=''>
            <Box data-cy='shadow-box' className={classes.shadowBoxContactUs}>
              <Typography
                data-cy='city'
                variant='h5'
                className={classes.titleFirstBox}>
                Söker du bostad?
              </Typography>
              <Button
                className={classes.button}
                data-cy='kontakta-oss-btn'
                variant='outlined'
                component={Link}
                to='/kontakt'>
                <Typography className={classes.buttonText} variant='button'>
                  Kontakta oss
                </Typography>
              </Button>
            </Box>
          </CardMedia>
        </Grid>
        <Grid data-cy='second-box' className={classes.gridItem} item>
          <CardMedia
            className={classes.image}
            component={Link}
            to='/fastigheter'
            image={strutsen}
            data-cy='limhamn-img'
            alt='Huset strutsen från ovan'>
            <Box data-cy='shadow-box' className={classes.shadowBox}>
              <Box className={classes.cityBox}>
                <Typography
                  data-cy='city'
                  variant='h5'
                  className={classes.city}>
                  malmö/limhamn
                </Typography>
              </Box>
            </Box>
          </CardMedia>
        </Grid>
      </Grid>
      <Grid className={classes.gridRow} container>
        <Grid data-cy='third-box' className={classes.gridItemCenter} item>
          <CardMedia
            className={classes.image}
            component={Link}
            to='/fastigheter'
            image={fredrik}
            data-cy='ystad-img'
            alt='Illustration av folk på en innergård'>
            <Box data-cy='shadow-box' className={classes.shadowBoxCenter}>
              <Box className={classes.cityBoxCenter}>
                <Typography
                  data-cy='city'
                  variant='h5'
                  className={classes.city}>
                  Nyproduktion
                </Typography>
              </Box>
              <Typography
                data-cy='address'
                variant='body1'
                className={classes.address}>
                Aurora
              </Typography>
            </Box>
          </CardMedia>
        </Grid>
      </Grid>
      <Grid className={classes.gridRow} container>
        <Grid data-cy='fourth-box' className={classes.gridItem} item>
          <CardMedia
            className={classes.image}
            component={Link}
            to='/fastigheter'
            image={helsingborg}
            data-cy='helsingborg-img'
            alt='Industri lokal med röda portar'>
            <Box data-cy='shadow-box' className={classes.shadowBox}>
              <Box className={classes.cityBoxTwo}>
                <Typography
                  data-cy='city'
                  variant='h5'
                  className={classes.city}>
                  ystad
                </Typography>
              </Box>
            </Box>
          </CardMedia>
        </Grid>
        <Grid data-cy='fifth-box' className={classes.gridItem} item>
          <Container className={classes.outerBox}>
            <Button
              className={classes.button}
              data-cy='våra-fastigheter-btn'
              variant='outlined'
              component={Link}
              to='/fastigheter'>
              <Typography className={classes.buttonText} variant='button'>
                Visa flera fastigheter
              </Typography>
            </Button>
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PropertiesSection
