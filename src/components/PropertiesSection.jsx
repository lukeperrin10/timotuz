import { Box, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';

import LimhamnSky from '../assets/images/LimhamnSky.JPG';
import LimhamnBack from '../assets/images/LimhamnBack.JPG';
import LimhamnFront from '../assets/images/LimhamnFront.JPG';
import threeDImage from '../assets/images/3d_draft.jpg';

const PropertiesSection = () => {
  return (
    <Box data-cy='property-section'>
      <Grid container>
        <Grid data-cy='property-column-0' container item>
          <Grid item>
            <CardMedia
              component='img'
              image={threeDImage}
              data-cy='property-image'
              alt='Stor fastighet med tegelfasad'
            />
          </Grid>
          <Grid item>
            <Typography data-cy='property-name' variant='h5'>
              Benvägen 32, Limhamn
            </Typography>
            <Typography data-cy='property-text' variant='subtitle1'>
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
        <Grid data-cy='property-column-1' container item>
          <Grid item>
            <CardMedia
              component='img'
              image={LimhamnSky}
              data-cy='property-image'
              alt='Stor fastighet med tegelfasad'
            />
          </Grid>
          <Grid item>
            <Typography data-cy='property-name' variant='h5'>
              Strandgatan 2, Limhamn
            </Typography>
            <Typography data-cy='property-text' variant='subtitle1'>
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
        <Grid data-cy='property-column-2' container item>
          <Grid item>
            <CardMedia
              component='img'
              image={LimhamnBack}
              data-cy='property-image'
              alt='Stor fastighet med tegelfasad'
            />
          </Grid>
          <Grid item>
            <Typography data-cy='property-name' variant='h5'>
              Väst svängen 32, Helsingborg
            </Typography>
            <Typography data-cy='property-text' variant='subtitle1'>
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
        <Grid data-cy='property-column-3' container item>
          <Grid item>
            <CardMedia
              component='img'
              image={LimhamnFront}
              data-cy='property-image'
              alt='Stor fastighet med tegelfasad'
            />
          </Grid>
          <Grid item>
            <Typography data-cy='property-name' variant='h5'>
              Bryggerigatan 3, Limhamn
            </Typography>
            <Typography data-cy='property-text' variant='subtitle1'>
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
