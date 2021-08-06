import React from 'react'
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  makeStyles,
  Grid
} from '@material-ui/core'
import logo_web_timotuz from '../../assets/images/logo_web_timotuz.svg'
import theme from '../../theme/theme'

const useStyles = makeStyles({
  logoContainer: {
    [theme.breakpoints.up('xs')]: {
      width: '65%',
      justifyContent: 'left',
      paddingLeft: '1rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '20%',
      justifyContent: 'center',
      paddingLeft: '0px'
    },
  },
  logo: {
    height: '30px',
  }
})

const Header = () => {
  const classes = useStyles()

  function ElevationScroll(props) {
    const { children } = props
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    })

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
  }

  return (
    <ElevationScroll>
      <AppBar color="secondary" data-cy='header'>
        <Toolbar disableGutters>
          <Grid container className={classes.logoContainer}>
            <img
              src={logo_web_timotuz}
              className={classes.logo}
              data-cy="header-logo"
              alt="Timotuz Company Logo"
            />
          </Grid>
          Header
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
