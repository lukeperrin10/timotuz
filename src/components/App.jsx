import { Box } from '@material-ui/core'
import React from 'react'
import Header from './navigation/Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const App = ({ component }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Box style={{ width: '100%' }}>{component}</Box>
      <Footer />
    </>
  )
}

export default App
