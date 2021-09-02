import React from 'react'
import HeroSectionMobile from '../components/HeroSectionMobile'
import HeroSection from '../components/HeroSection'
import PropertiesSection from '../components/PropertiesSection'
import AboutUsSection from '../components/AboutUs'
import theme from '../theme/theme'
import { useMediaQuery } from '@material-ui/core'

const IndexView = () => {
  const mobile = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <>
      {mobile ? <HeroSectionMobile /> : <HeroSection />}
      <PropertiesSection />
      <AboutUsSection />
    </>
  )
}

export default IndexView
