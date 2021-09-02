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
import fredrik from '../assets/images/pågåendeYstad/02.jpg'
import strutsen from '../assets/images/Limhamn/1.JPG'

const PropertiesSection = () => {
  const classes = propertyGridStyle()

  return (
    <Container className={classes.gridContainer}>
      <Grid className={classes.gridRow} container>
        <Grid data-cy="first-box" className={classes.gridItem} container item>
          <Container className={classes.outerBox}>
            <Container className={classes.innerBox}>
              <Typography data-cy="question" variant='body1' className={classes.firstText}>
                Söker du lokal eller bostad?
              </Typography>
              <Typography data-cy="phone" variant='body2' className={classes.phoneNumber}>
                040 - 68 59 400
              </Typography>
            </Container>
          </Container>
        </Grid>
        <Grid data-cy="second-box" className={classes.gridItem} item>
          <CardMedia
            className={classes.image}
            component={Link}
            to='/vara_fastigheter'
            image={strutsen}
            data-cy='limhamn-img'
            alt='Huset strutsen från ovan'>
            <Box data-cy='shadow-box' className={classes.shadowBox}>
              <Typography data-cy='city' variant='body2' className={classes.city}>
                limhamn
              </Typography>
              <Typography data-cy='address' variant='body2' className={classes.address}>
                Strutsen 25
              </Typography>
            </Box>
          </CardMedia>
        </Grid>
      </Grid>
      <Grid className={classes.gridRow} container>
        <Grid data-cy="third-box" className={classes.gridItemCenter} item>
          <CardMedia
            className={classes.image}
            component={Link}
            to='/vara_fastigheter'
            image={fredrik}
            data-cy='ystad-img'
            alt='Illustration av folk på en innergård'>
            <Box data-cy='shadow-box' className={classes.shadowBoxCenter}>
              <Typography data-cy='city' variant='body2' className={classes.city}>
                ystad
              </Typography>
              <Typography data-cy='address' variant='body2' className={classes.address}>
                Fredrik 16
              </Typography>
            </Box>
          </CardMedia>
        </Grid>
      </Grid>
      <Grid className={classes.gridRow} container>
        <Grid data-cy="fourth-box" className={classes.gridItem} item>
          <CardMedia
            className={classes.image}
            component={Link}
            to='/vara_fastigheter'
            image={helsingborg}
            data-cy='helsingborg-img'
            alt='Industri lokal med röda portar'>
            <Box data-cy='shadow-box' className={classes.shadowBox}>
              <Typography data-cy='city' variant='body2' className={classes.city}>
                helsingborg
              </Typography>
              <Typography data-cy='address' variant='body2' className={classes.address}>
                Mörsaren Västra 6
              </Typography>
            </Box>
          </CardMedia>
        </Grid>
        <Grid data-cy="fifth-box" className={classes.gridItem} item>
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
