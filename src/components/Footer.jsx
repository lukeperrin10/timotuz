import React from 'react'
import {
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {    
    backgroundColor: theme.palette.secondary.main,
    height: '20vh',
    width: '100%'
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.footer}>
      
    </Grid>
  )
}

export default Footer
