import React from 'react'
import { Box, CardMedia, Container, Typography } from '@material-ui/core'
import heroImage1 from '../assets/images/pågåendeYstad/10.jpg'
import heroImage2 from '../assets/images/pågåendeYstad/03.jpg'
import heroSectionStyle from '../theme/heroSection'
import HeroSlider, { Slide, OverlayContainer } from 'hero-slider'

const HeroSection = () => {
  const classes = heroSectionStyle()
  return (
    <Box data-cy='hero-section' className={classes.section}>
      <HeroSlider
        slidingAnimation='right_to_left'
        orientation='horizontal'
        settings={{
          slidingDuration: 350,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 5000,
          height: '100vh',
        }}>
        <OverlayContainer>
          <Box data-cy='shadow-box' className={classes.shadowBox}>
            <Container className={classes.content}>
              <Typography className={classes.textFirst} variant='h1'>
                Nyproduktionsproject Aurora:              
              </Typography>
              <Typography className={classes.textSecond} variant='h4'>
                Gamla anor möter morgondagens vanor
              </Typography>
            </Container>
          </Box>
        </OverlayContainer>
        <Slide
          background={{
            backgroundImage: heroImage1,
            backgroundPositionY: '95%',
            backgroundSize: '100%',
          }}
        />
        <Slide
          background={{
            backgroundImage: heroImage2,
            backgroundPositionY: '100%',
            backgroundSize: '100%',
          }}
        />
      </HeroSlider>
    </Box>
  )
}

export default HeroSection
