import React from 'react'
import { Box, CardMedia, Container, Typography } from '@material-ui/core'
import overview from '../assets/images/pågåendeYstad/01.jpg'
import heroSectionStyle from '../theme/heroSection'

const HeroSection = () => {
  const classes = heroSectionStyle()
  return (
    <Box data-cy='hero-section' className={classes.section}>
      <CardMedia
        className={classes.image}
        component='img'
        image={overview}
        data-cy='hero-img'
        alt='Pågående project i Ystad'
      />
      <Box data-cy='shadow-box' className={classes.shadowBox}>
        <Container className={classes.content}>
          <Typography className={classes.textFirst} variant='h1'>
            Fredrik 16
          </Typography>
          <Typography className={classes.textSecond} variant='h4'>
            Gamla anor möter morgondagens vanor
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default HeroSection
