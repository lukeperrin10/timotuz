import { Box, Typography } from '@material-ui/core';
import React from 'react';

const App = () => {
  return (
    <>
      <Typography variant='h1' component='h1'>
        <Box color='text.primary'>Hello world</Box>
      </Typography>
    </>
  );
};

export default App;
