import React from 'react';
import { Box, CardMedia, makeStyles, Typography } from '@material-ui/core';
import overview from '../assets/images/overview.jpeg';
import houseIconWhite from '../assets/images/Building_ikon_white.svg'


const useStyles = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up('xs')]: {
      height: '100vh',
    },
  },
  image: {
    [theme.breakpoints.up('xs')]: {
      height: '100%',
    },
  },
  shadowBox: {
    [theme.breakpoints.up('xs')]: {
      height: '100%',
      width: '65%',
      position: 'absolute',
      backgroundColor: 'rgba(15, 15, 15, 0.9)',
      top: '0px',
      left: '0px',
      paddingTop: '200px',
      paddingLeft: '4%',
      paddingRight: '4%'
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '250px',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '300px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '100%',
      width: '30%',
      position: 'absolute',
      backgroundColor: 'rgba(15, 15, 15, 0.9)',
      top: '0px',
      left: '20%',
      paddingTop: '15%',
      paddingLeft: '1%',
      paddingRight: '1%'
    },
  },
  informationText: {
    [theme.breakpoints.up('xs')]: {
      color: '#eee',
      fontSize: '2rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.75rem'
    },
  },
  hoseIcon: {
    [theme.breakpoints.up('xs')]: {
      width: '50%',
      marginLeft: '20%',
      marginRight: '20%',
      marginTop: '50%'
    },
  }
}));

const HeroSection = () => {
  const classes = useStyles();
  return (
    <Box data-cy='hero-section' className={classes.section}>
      <CardMedia
        className={classes.image}
        component='img'
        image={overview}
        data-cy='hero-img'
        alt='Bird view of a small town'
      />
      <Box data-cy='shadow-box' className={classes.shadowBox}>
        <Typography className={classes.informationText} variant='h2' data-cy='information-text'>
          Trygga fastigheter i södra sverige
        </Typography>
        <CardMedia
        className={classes.hoseIcon}
        component='img'
        image={houseIconWhite}
        data-cy='house-logo'
        alt=''
      />
      </Box>
    </Box>
  );
};

export default HeroSection;
