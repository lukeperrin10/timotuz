import React from 'react';
import properties_dynamic from '../data/fixtures/properties_dynamic';
import PropertyCardDynamic from '../components/PropertyCardDynamic'
import { Grid, Container } from '@material-ui/core';


const PropertiesView = () => {

  const property = properties_dynamic.map((property, id) => {
    return <PropertyCardDynamic property={property} key={id} />;
  });

  return (
    <Container maxWidth='xl' style={{marginTop: '4rem'}}>
      <Grid container>{property}</Grid>
    </Container>
  );
};

export default PropertiesView;
