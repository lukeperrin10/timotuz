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
import helsingborg from '../assets/images/Helsingborg/1.jpg'
import fredrik from '../assets/images/Pågående_Ystad/02.jpg'
import strutsen from '../assets/images/Limhamn/1.JPG'

const PropertiesSection = () => {
  const classes = propertyGridStyle()

  return (
    <Container className={classes.gridContainer}>
      <Grid className={classes.gridRow} container>
        <Grid className={classes.gridItem} item>
          <Container className={classes.outerBox}>
            <Container className={classes.innerBox}>
              <Typography variant='body1' className={classes.firstText}>
                Söker du lokal eller bostad?
              </Typography>
              <Typography variant='body2' className={classes.phoneNumber}>
                040 - 68 59 400
              </Typography>
            </Container>
          </Container>
        </Grid>
        <Grid className={classes.gridItem} item>
          <CardMedia
            className={classes.image}
            component={Link}
            to='/vara_fastigheter'
            image={strutsen}
            data-cy='helsinborg-img'
            alt='Huset strutsen från ovan'>
            <Box className={classes.shadowBox}></Box>
          </CardMedia>
        </Grid>
      </Grid>
      <Grid className={classes.gridRow} container>
        <Grid className={classes.gridItemCenter} item>
          <CardMedia
            className={classes.image}
            component={Link}
            to='/vara_fastigheter'
            image={fredrik}
            data-cy='helsinborg-img'
            alt='Illustration av folk på en innergård'>
            <Box className={classes.shadowBoxCenter}></Box>
          </CardMedia>
        </Grid>
      </Grid>
      <Grid className={classes.gridRow} container>
        <Grid className={classes.gridItem} item>
          <CardMedia
            className={classes.image}
            component={Link}
            to='/vara_fastigheter'
            image={helsingborg}
            data-cy='helsinborg-img'
            alt='Industri lokal med röda portar'>
            <Box className={classes.shadowBox}></Box>
          </CardMedia>
        </Grid>
        <Grid className={classes.gridItem} item>
          <Container className={classes.outerBox}>
            <Button
              className={classes.button}
              data-cy='våra-fastigheter-btn'
              variant='outlined'
              color='common'
              component={Link}
              to='/vara_fastigheter'>
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
