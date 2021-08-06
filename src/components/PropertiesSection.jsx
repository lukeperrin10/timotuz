import { Box, CardMedia, Grid, Typography, Divider } from '@material-ui/core';
import React from 'react';

import LimhamnSky from '../assets/images/LimhamnSky.JPG';
import LimhamnBack from '../assets/images/LimhamnBack.JPG';
import LimhamnFront from '../assets/images/LimhamnFront.JPG';
import threeDImage from '../assets/images/3d_draft.jpg';
import propertySectionStyle from '../theme/propertiesSection';

const PropertiesSection = () => {
  const classes = propertySectionStyle();
  return (
    <Box data-cy='property-section'>
      <Box className={classes.headerTextContainer}>
        <Typography
          data-cy='properties-header'
          color='primary'
          variant='h4'
          gutterBottom>
          Fastigheter
        </Typography>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
          distinctio!
        </Typography>
      </Box>
      <Divider className={classes.divider} />
      <Grid container>
        <Grid
          data-cy='property-0'
          container
          item
          xs={12}
          className={classes.propertyColumn}>
          <Grid item lg={5}>
            <CardMedia
              className={classes.image}
              component='img'
              image={threeDImage}
              data-cy='property-image'
              alt='Stor fastighet med tegelfasad'
            />
          </Grid>
          <Grid item lg={5} className={classes.textContent}>
            <Typography data-cy='property-address' variant='h5' gutterBottom>
              Benvägen 32, Limhamn
            </Typography>
            <Typography data-cy='property-description' variant='subtitle1'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto corporis voluptatem nostrum, at quae vitae recusandae
              numquam aliquam et consequuntur illum perspiciatis deserunt.
              Necessitatibus itaque facere expedita tenetur sit numquam
              consectetur eveniet quas maiores quidem tempore alias, asperiores
              reiciendis officia sed harum consequuntur modi odit rerum ea
              cupiditate vel? Illum dignissimos nobis, cum, amet nulla ratione,
              dolorum assumenda ullam expedita deleniti facere? Dignissimos
              dolorem repellendus dolores doloremque, sapiente vero cumque, odio
              maxime aperiam voluptas tempora adipisci nulla qui assumenda
              sequi, excepturi natus autem porro hic. At repellendus fugiat
              corporis dolore rerum quod ullam modi? Rerum, libero! Iusto minima
              consequatur eaque?
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid
          data-cy='property-1'
          container
          item
          xs={12}
          className={classes.propertyColumn}>
          <Grid item lg={5}>
            <CardMedia
              className={classes.image}
              component='img'
              image={LimhamnSky}
              data-cy='property-image'
              alt='Stor fastighet med tegelfasad'
            />
          </Grid>
          <Grid item lg={5} className={classes.textContent}>
            <Typography data-cy='property-address' variant='h5' gutterBottom>
              Strandgatan 2, Limhamn
            </Typography>
            <Typography data-cy='property-description' variant='subtitle1'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto corporis voluptatem nostrum, at quae vitae recusandae
              numquam aliquam et consequuntur illum perspiciatis deserunt.
              Necessitatibus itaque facere expedita tenetur sit numquam
              consectetur eveniet quas maiores quidem tempore alias, asperiores
              reiciendis officia sed harum consequuntur modi odit rerum ea
              cupiditate vel? Illum dignissimos nobis, cum, amet nulla ratione,
              dolorum assumenda ullam expedita deleniti facere? Dignissimos
              dolorem repellendus dolores doloremque, sapiente vero cumque, odio
              maxime aperiam voluptas tempora adipisci nulla qui assumenda
              sequi, excepturi natus autem porro hic. At repellendus fugiat
              corporis dolore rerum quod ullam modi? Rerum, libero! Iusto minima
              consequatur eaque?
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid
          data-cy='property-2'
          container
          item
          xs={12}
          className={classes.propertyColumn}>
          <Grid item lg={5}>
            <CardMedia
              className={classes.image}
              component='img'
              image={LimhamnBack}
              data-cy='property-image'
              alt='Stor fastighet med tegelfasad'
            />
          </Grid>
          <Grid item lg={5} className={classes.textContent}>
            <Typography data-cy='property-address' variant='h5' gutterBottom>
              Väst svängen 32, Helsingborg
            </Typography>
            <Typography data-cy='property-description' variant='subtitle1'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto corporis voluptatem nostrum, at quae vitae recusandae
              numquam aliquam et consequuntur illum perspiciatis deserunt.
              Necessitatibus itaque facere expedita tenetur sit numquam
              consectetur eveniet quas maiores quidem tempore alias, asperiores
              reiciendis officia sed harum consequuntur modi odit rerum ea
              cupiditate vel? Illum dignissimos nobis, cum, amet nulla ratione,
              dolorum assumenda ullam expedita deleniti facere? Dignissimos
              dolorem repellendus dolores doloremque, sapiente vero cumque, odio
              maxime aperiam voluptas tempora adipisci nulla qui assumenda
              sequi, excepturi natus autem porro hic. At repellendus fugiat
              corporis dolore rerum quod ullam modi? Rerum, libero! Iusto minima
              consequatur eaque?
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid
          data-cy='property-3'
          container
          item
          xs={12}
          className={classes.propertyColumn}>
          <Grid item lg={5}>
            <CardMedia
              className={classes.image}
              component='img'
              image={LimhamnFront}
              data-cy='property-image'
              alt='Stor fastighet med tegelfasad'
            />
          </Grid>
          <Grid item lg={5} className={classes.textContent}>
            <Typography data-cy='property-address' variant='h5' gutterBottom>
              Bryggerigatan 3, Limhamn
            </Typography>
            <Typography data-cy='property-description' variant='subtitle1'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto corporis voluptatem nostrum, at quae vitae recusandae
              numquam aliquam et consequuntur illum perspiciatis deserunt.
              Necessitatibus itaque facere expedita tenetur sit numquam
              consectetur eveniet quas maiores quidem tempore alias, asperiores
              reiciendis officia sed harum consequuntur modi odit rerum ea
              cupiditate vel? Illum dignissimos nobis, cum, amet nulla ratione,
              dolorum assumenda ullam expedita deleniti facere? Dignissimos
              dolorem repellendus dolores doloremque, sapiente vero cumque, odio
              maxime aperiam voluptas tempora adipisci nulla qui assumenda
              sequi, excepturi natus autem porro hic. At repellendus fugiat
              corporis dolore rerum quod ullam modi? Rerum, libero! Iusto minima
              consequatur eaque?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PropertiesSection;
