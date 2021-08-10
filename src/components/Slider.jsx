import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import theme from '../theme/theme'

const Slider = ({
  children,
  timeout = 750,
  animation = 'slide',
  autoPlay = true,
}) => {
  const mobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Carousel
      navButtonsAlwaysVisible={mobile ? false : true}
      animation={animation}
      timeout={timeout}
      autoPlay={autoPlay}
      fullHeightHover={false}
    >
      {children}
    </Carousel>
  )
}

export default Slider
