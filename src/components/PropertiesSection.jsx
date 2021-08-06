import {
  Box,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
  Divider,
} from '@material-ui/core';
import React from 'react';

import LimhamnSky from '../assets/images/LimhamnSky.JPG';
import LimhamnBack from '../assets/images/LimhamnBack.JPG';
import LimhamnFront from '../assets/images/LimhamnFront.JPG';
import threeDImage from '../assets/images/3d_draft.jpg';

const useStyles = makeStyles((theme) => ({
  headerTextContainer: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      padding: '50px 30px'
    },
  },
  propertyColumn: {
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px 0',
    },
  },
  image: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '375px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '400px',
      height: '400px',
    },
    [theme.breakpoints.up('md')]: {
      width: '450px',
      height: '450px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '600px',
      height: '600px',
    },
  },
  textContent: {
    [theme.breakpoints.up('xs')]: {
      padding: '20px 30px',
      height: 'auto'
    },
    [theme.breakpoints.up('sm')]: {
      padding: '30px 100px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '30px 150px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '30px 30px',
      marginLeft: '40px',
      width: 'auto'
    },
  },
  divider: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
  }
}));

const PropertiesSection = () => {
  const classes = useStyles();
  return (
    <Box data-cy='property-section'>
      <Box className={classes.headerTextContainer}>
        <Typography color='primary' variant='h4' gutterBottom>Fastigheter</Typography>
        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, distinctio!</Typography>
      </Box>
      <Divider className={classes.divider}/>
      <Grid container>
        <Grid
          data-cy='property-column-0'
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
            <Typography data-cy='property-name' variant='h5' gutterBottom>
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
        <Divider className={classes.divider}/>
        <Grid
          data-cy='property-column-1'
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
            <Typography data-cy='property-name' variant='h5' gutterBottom>
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
        <Divider className={classes.divider}/>
        <Grid
          data-cy='property-column-2'
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
            <Typography data-cy='property-name' variant='h5' gutterBottom>
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
        <Divider className={classes.divider}/>
        <Grid
          data-cy='property-column-3'
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
            <Typography data-cy='property-name' variant='h5' gutterBottom>
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
