import { Box } from '@material-ui/core';
import React from 'react';
import Header from './navigation/Header';

const App = ({ component }) => {
  return (
    <>
      <Header />
      <Box>{component}</Box>
    </>
  );
};

export default App;
