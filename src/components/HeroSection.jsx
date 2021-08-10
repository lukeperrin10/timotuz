import React from 'react'
import { Box, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import overview from '../assets/images/overview.jpeg'
import houseIconWhite from '../assets/images/Building_ikon_white.svg'

const useStyles = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up('xs')]: {
      height: '90vh',
    },
    [theme.breakpoints.up('sm')]: {
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
      backgroundColor: 'rgba(15, 15, 15, 0.6)',
      top: '0px',
      left: '0px',
      paddingTop: '56px',
      paddingBottom: '99px',
      paddingLeft: '4%',
      paddingRight: '4%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
      left: '4%',
      paddingLeft: '1%',
      paddingRight: '1%',
    },
  },
  shadowBoxContent: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%'
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
      bottom: '0',
    },
  },
  infoGrid: {
    [theme.breakpoints.up('xs')]: {
      height: '100%',
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingTop: '0px',
      paddingBottom: '0px',
    },
    [theme.breakpoints.up('sm')]: {
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
      marginTop: '10px',
    },
  },
  dataText: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.7rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.4rem',
    },
  },
}))

const HeroSection = () => {
  const classes = useStyles()
  return (
    <Box data-cy="hero-section" className={classes.section}>
      <CardMedia
        className={classes.image}
        component="img"
        image={overview}
        data-cy="hero-img"
        alt="Bird view of a small town"
      />
      <Box data-cy="shadow-box" className={classes.shadowBox}>
        <Box className={classes.shadowBoxContent}>
          <Typography
            className={classes.informationText}
            variant="h2"
            data-cy="information-text"
          >
            Trygga fastigheter i södra sverige
          </Typography>
          <CardMedia
            className={classes.hoseIcon}
            component="img"
            image={houseIconWhite}
            data-cy="house-logo"
            alt=""
          />
        </Box>
      </Box>
      <Box
        data-cy="information-bar"
        className={classes.redInfoBox}
        bgcolor="secondary.main"
        color="secondary.contrastText"
      >
        <Grid container spacing={0} className={classes.infoGrid}>
          <Grid className={classes.dataColumn} data-cy="column-0" item xs={2}>
            <Typography className={classes.dataText} variant="h4">
              114
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Lorem ipsum
            </Typography>
          </Grid>
          <Grid className={classes.dataColumn} data-cy="column-1" item xs={2}>
            <Typography className={classes.dataText} variant="h4">
              32
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Lorem ipsum
            </Typography>
          </Grid>
          <Grid className={classes.dataColumn} data-cy="column-2" item xs={2}>
            <Typography className={classes.dataText} variant="h4">
              2
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Lorem ipsum
            </Typography>
          </Grid>
          <Grid className={classes.dataColumn} data-cy="column-3" item xs={2}>
            <Typography className={classes.dataText} variant="h4">
              Ja
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Lorem ipsum
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default HeroSection
