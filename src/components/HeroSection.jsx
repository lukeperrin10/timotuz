import React from 'react'
import { Box, CardMedia} from '@material-ui/core'
import overview from '../assets/images/Pågående_Ystad/01.jpg'
import heroSectionStyle from '../theme/heroSection'


const HeroSection = () => {
  const classes = heroSectionStyle()
  return (
    <Box data-cy="hero-section" className={classes.section}>
      <CardMedia
        className={classes.image}
        component="img"
        image={overview}
        data-cy="hero-img"
        alt="Bird view of a small town"
      />
      <Box data-cy="shadow-box" className={classes.shadowBox}>
        
      </Box>
     
    </Box>
  )
}

export default HeroSection
