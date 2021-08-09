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
      <Box style={{ minHeight: '80vh' }}>{component}</Box>
      <Footer />
    </>
  )
}

export default App
