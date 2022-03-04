import React from 'react'
import { Box, Container, Typography, Button } from '@material-ui/core'
import heroImage1 from '../assets/images/pågåendeYstad/03.jpg'
import heroImage2 from '../assets/images/pågåendeYstad/01.jpg'
import heroSectionStyle from '../theme/heroSection'
import HeroSlider, { Slide, OverlayContainer } from 'hero-slider'
import { Link } from 'react-router-dom'

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
                Nyproduktionsprojekt Aurora
              </Typography>
              <Typography className={classes.textSecond} variant='h5'>
                Gamla anor möter morgondagens vanor
              </Typography>
              <Button
                component={Link}
                to='/fastigheter'
                variant='outlined'
                color='inherit'
                className={classes.heroButton}>
                <Typography variant='button' className={classes.heroButtonText}>
                  Läs mer
                </Typography>
              </Button>
            </Container>
          </Box>
        </OverlayContainer>
        <Slide
          background={{
            backgroundImage: heroImage1,
            backgroundPositionY: '95%',
            backgroundAttachment: 'fixed',
          }}
        />
        <Slide
          background={{
            backgroundImage: heroImage2,
            backgroundPositionY: '95%',
            backgroundAttachment: 'fixed',
          }}
        />
      </HeroSlider>
    </Box>
  )
}

export default HeroSection
