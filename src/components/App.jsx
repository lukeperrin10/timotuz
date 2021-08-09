import { Box } from '@material-ui/core'
import React from 'react'
import Header from './navigation/Header'
import ScrollToTop from './ScrollToTop'

const App = ({ component }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Box>{component}</Box>
    </>
  )
}

export default App
