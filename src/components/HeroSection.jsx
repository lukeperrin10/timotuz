import React from 'react'
import { Box, CardMedia, Grid, Typography } from '@material-ui/core'
import overview from '../assets/images/overview.jpeg'
import heroSectionStyle from '../theme/heroSection'


const HeroSection = () => {
  const classes = heroSectionStyle()
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
