import React from 'react';
import properties_dynamic from '../data/fixtures/properties_dynamic';

const PropertiesView = () => {
  const property = properties_dynamic.map((property, id) => {
    return <PropertyCardDynamic property={property} key={id} />;
  });

  return <Grid container>{property}</Grid>;
};

export default PropertiesView;
