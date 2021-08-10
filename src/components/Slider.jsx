import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import theme from '../theme/theme'

const Slider = ({ children, timeout = 750, animation = 'slide' }) => {
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  
  return (
    <Carousel
      navButtonsProps={{
        style: { backgroundColor: theme.palette.secondary.main },
      }}
      navButtonsAlwaysVisible={mobile ? false : true}
      animation={animation}
      timeout={timeout}
    >
      {children}
    </Carousel>
  )
}

export default Slider
