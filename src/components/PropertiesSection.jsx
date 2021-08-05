import { Box, Grid } from '@material-ui/core'
import React from 'react'
import PropertyColum from './PropertyColum'

const PropertiesSection = () => {
  return (
   <Box data-cy='property-section' >
     <Grid container>
      <PropertyColum />
     </Grid>
   </Box>
  )
}

export default PropertiesSection
