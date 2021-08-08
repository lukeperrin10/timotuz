import React from 'react';
import {
  Box,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import overview from '../assets/images/overview.jpeg';
import houseIconWhite from '../assets/images/Building_ikon_white.svg';

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
      paddingBottom: '200px',
      paddingLeft: '4%',
      paddingRight: '4%',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '200px',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '250px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
      left: '20%',
      paddingTop: '10%',
      paddingLeft: '1%',
      paddingRight: '1%',
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: '4%',
    },
  },
  informationText: {
    [theme.breakpoints.up('xs')]: {
      color: '#eee',
      fontSize: '2rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.75rem',
    },
  },
  hoseIcon: {
    [theme.breakpoints.up('xs')]: {
      width: '50%',
      marginLeft: '20%',
      marginRight: '20%',
      marginTop: '25%',
    },
  },
  redInfoBox: {
    [theme.breakpoints.up('xs')]: {
      position: 'absolute',
      height: 'auto',
      width: '100%',
      textAlign: 'center',
      bottom: '0'
    },
  },
  infoGrid: {
    [theme.breakpoints.up('xs')]: {
      height: '100%',
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
  },
  dataColumn: {
    [theme.breakpoints.up('xs')]: {
      marginBottom: '10px',
      marginTop: '10px'
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
        <Typography
          className={classes.informationText}
          variant='h2'
          data-cy='information-text'>
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
      <Box data-cy='information-bar' className={classes.redInfoBox} bgcolor='secondary.main' color='secondary.contrastText'>
        <Grid container spacing={0} className={classes.infoGrid}>
          <Grid className={classes.dataColumn} data-cy='column-0' item xs={6} lg={2}>
            <Typography variant='h3'>114</Typography>
            <Typography variant='subtitle1'gutterBottom>Lorem ipsum</Typography>
          </Grid>
          <Grid className={classes.dataColumn} data-cy='column-1' item xs={6} lg={2}>
            <Typography variant='h3'>32</Typography>
            <Typography variant='subtitle1' gutterBottom>Lorem ipsum</Typography>
          </Grid>
          <Grid className={classes.dataColumn} data-cy='column-2' item xs={6} lg={2}>
            <Typography variant='h3'>2</Typography>
            <Typography variant='subtitle1' gutterBottom>Lorem ipsum</Typography>
          </Grid>
          <Grid className={classes.dataColumn} data-cy='column-3' item xs={6} lg={2}>
            <Typography variant='h3'>Ja</Typography>
            <Typography variant='subtitle1' gutterBottom>Lorem ipsum</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
