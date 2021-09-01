import React, { useState, useEffect, useMemo } from 'react'
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  makeStyles,
  Grid,
  Tabs,
  Button,
  Hidden,
  SwipeableDrawer,
  IconButton,
} from '@material-ui/core'
import logo_web_timotuz from '../../assets/images/logo_web_timotuz_green.svg'
import logo_no_text from '../../assets/images/logo_no_text_white.svg'
import theme from '../../theme/theme'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import AdaptiveHelper from '../../modules/AdaptiveHelper'
import NavTab from './NavTab'

const useStyles = makeStyles({
  navBar: {
    [theme.breakpoints.up('xs')]: {
      backgroundColor: '#fafafa',
    },
  },
  navBarTabs: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: '30px',
      marginLeft: 'auto',
    },
  },
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
  drawerLogo: {
    backgroundColor: theme.palette.secondary.main,
    height: '60px',
    padding: '0.5rem 0 0.5rem 0',
  },
  logoButton: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  hamburger: { margin: ' 0 12px 0 auto' },
})

const Header = () => {
  let currentUrl = useLocation().pathname
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const tabs = useMemo(
    () => ['Start', 'Våra fastigheter', 'Om oss', 'Kontakta oss'],
    []
  )

  useEffect(() => {
    AdaptiveHelper.muiActiveTabSelect(currentUrl, tabs, setSelectedTab)
  }, [currentUrl, tabs])

  const ElevationScroll = (props) => {
    const { children } = props
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    })

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
  }

  const navBar = (
    <Tabs value={selectedTab} className={classes.navBarTabs}>
      {tabs.map((tab, index) => (
        <NavTab key={tab} label={tab} value={index} />
      ))}
    </Tabs>
  )

  const drawer = (
    <>
      <SwipeableDrawer
        className={classes.drawer}
        data-cy="drawer"
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        {tabs.map((tab, index) => (
          <NavTab
            key={`${tab}-drawer`}
            label={tab}
            value={index}
            drawer={true}
            setDrawerOpen={setDrawerOpen}
          />
        ))}
        <img
          src={logo_no_text}
          className={classes.drawerLogo}
          data-cy="drawer-logo"
          alt="Timotuz Company Logo"
        />
      </SwipeableDrawer>
      <IconButton
        data-cy="hamburger-menu"
        className={classes.hamburger}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
    </>
  )

  return (
    <ElevationScroll>
      <AppBar data-cy="header" className={classes.navBar}>
        <Toolbar disableGutters className={classes.navBar}>
          <Grid container className={classes.logoContainer}>
            <Button
              disableRipple
              className={classes.logoButton}
              component={Link}
              to="/start"
            >
              <img
                src={logo_web_timotuz}
                style={{ height: '50px' }}
                data-cy="logo"
                alt="Timotuz Company Logo"
                onClick={window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </Button>
          </Grid>
          <Hidden smDown>{navBar}</Hidden>
          <Hidden mdUp>{drawer}</Hidden>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
