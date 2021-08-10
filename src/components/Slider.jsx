import React from 'react'
import { useMediaQuery, IconButton } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import theme from '../theme/theme'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import propertySectionStyle from '../theme/themePropertiesSection'

const Slider = ({
  children,
  timeout = 750,
  animation = 'slide',
  autoPlay = true,
}) => {
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  const classes = propertySectionStyle()

  return (
    <Carousel
      animation={animation}
      timeout={timeout}
      autoPlay={mobile ? false : autoPlay}
      fullHeightHover={false}
      NavButton={({ onClick, style, next, prev }) =>
        mobile ? (
          <></>
        ) : (
          <IconButton
            onClick={onClick}
            className={classes.sliderButton}
            style={style}
          >
            {next && <ChevronRightIcon />}
            {prev && <ChevronLeftIcon />}
          </IconButton>
        )
      }
    >
      {children}
    </Carousel>
  )
}

export default Slider
