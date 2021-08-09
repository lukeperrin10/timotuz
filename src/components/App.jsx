import { Box } from '@material-ui/core'
import React from 'react'
import Header from './navigation/Header'
import Footer from './Footer'

const App = ({ component }) => {
  return (
    <>
      <Header />
      <Box style={{ minHeight: '80vh' }}>{component}</Box>
      <Footer />
    </>
  )
}

export default App
