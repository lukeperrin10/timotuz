import React from 'react'
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  makeStyles,
  Grid,
  Tabs,
  Tab,
  Button,
} from '@material-ui/core'
import logo_web_timotuz from '../../assets/images/logo_web_timotuz.svg'
import theme from '../../theme/theme'

const secondary = theme.palette.secondary

const useStyles = makeStyles({
  logoContainer: {
    [theme.breakpoints.up('xs')]: {
      width: '172px',
      justifyContent: 'left',
      paddingLeft: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20%',
      justifyContent: 'center',
      paddingLeft: '0px',
    },
  },
  tab: {
    minWidth: 10,
    margin: '0 12px',
  },
  phoneButton: {  
    borderRadius: 0,
    height: '4rem'
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

  const navMenu = ['Start', 'Fastigheter', 'Om oss', 'Kontakta oss'].map(
    (tab) => <Tab key={tab} label={tab} className={classes.tab} />
  )

  return (
    <ElevationScroll>
      <AppBar data-cy="header">
        <Toolbar disableGutters>
          <Grid container className={classes.logoContainer}>
            <img
              src={logo_web_timotuz}
              style={{ height: '30px' }}
              data-cy="header-logo"
              alt="Timotuz Company Logo"
            />
          </Grid>
          <Tabs value={0} style={{ marginLeft: 'auto' }}>{navMenu}</Tabs>
          <Button
            variant="contained"
            color='secondary'
            disableElevation
            className={classes.phoneButton}
          >
            031-123-4567
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
