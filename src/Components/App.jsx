import { Box, Container } from '@material-ui/core';
import React from 'react';
import Header from './Navigation/Header';

const App = ({ component }) => {
  return (
    <>
      <Header />
      <Container maxWidth='xl' style={{ padding: '0px' }}>
        <Box my={10}>{component}</Box>
      </Container>
    </>
  );
};

export default App;
