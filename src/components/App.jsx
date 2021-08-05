import { Box } from '@material-ui/core';
// import { Box, Container } from '@material-ui/core';
import React from 'react';
import Header from './Navigation/Header';

const App = ({ component }) => {
  return (
    <>
      <Header />
        <Box>{component}</Box>
      {/* <Container maxWidth='xl' style={{ padding: '0px', margin: '0px' }}> */}
        {/* <Box my={10}>{component}</Box> */}
      {/* </Container> */}
    </>
  );
};

export default App;
