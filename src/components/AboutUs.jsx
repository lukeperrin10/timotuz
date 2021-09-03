import {
  Typography,
  Box,
  CardMedia,
  Button,
  useMediaQuery,
} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

import aboutUsStyle from '../theme/aboutUsSection'
import people_2 from '../assets/images/people_2.jpg'

const AboutUs = () => {
  const classes = aboutUsStyle()
  const desktop = useMediaQuery('(min-width:1265px)')
  return (
    <>
      <Box
        data-cy='about-us-section'
        className={classes.contentContainer}
        id='about_us'>
        {desktop ? undefined : (
          <Box className={classes.shadowBox}>
            <Typography variant='h4' className={classes.header}>
              Om oss
            </Typography>
          </Box>
        )}

        <Box className={classes.imageContainer}>
          <CardMedia
            component='img'
            image={people_2}
            className={classes.image}
          />
        </Box>
        <Box className={classes.textContainer}>
          <Box className={classes.textContent}>
            {desktop && (
              <Typography variant='h4' className={classes.header}>
                Om oss
              </Typography>
            )}
            <Typography
              data-cy='about-us-content'
              className={classes.aboutUsText}
              variant='body1'>
              Timotuz skall skapa platser för skåningar att växa och trivas på.
              Vi gör det genom att tillgodose bostads- och lokalbehov idag, men
              med ena foten in i morgondagens teknik och miljö. <br></br>
              <br></br> Vi ska hitta eller skapa fastigheter med stor
              värdepotential och utveckla dessa för ett lönsamt ägande och en
              hållbar framtid.
            </Typography>

            <Button
              className={classes.button}
              data-cy='mer-om-oss-btn'
              variant='outlined'
              component={Link}
              to='/om_oss'>
              Mer om oss
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default AboutUs
