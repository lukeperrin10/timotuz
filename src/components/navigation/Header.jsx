import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  makeStyles,
  Grid,
  Tabs,
  Tab,
  Button,
  Hidden,
  SwipeableDrawer,
  IconButton,
  Typography,
} from '@material-ui/core'
import logo_web_timotuz from '../../assets/images/logo_web_timotuz.svg'
import logo_no_text from '../../assets/images/logo_no_text.svg'
import theme from '../../theme/theme'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import MenuIcon from '@material-ui/icons/Menu'
import PhoneIcon from '@material-ui/icons/Phone'

const _ = require('lodash')

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
  logoButton: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabDesktop: {
    minWidth: 10,
    marginRight: '2rem',
  },
  tabMobile: {
    width: '50vw',
  },
  phoneButton: {
    borderRadius: 0,
    height: '4rem',
    padding: '0 1.5rem',
  },
  hamburger: { margin: ' 0 12px 0 auto' },
})

const Header = () => {
  let url = useLocation()
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    switch (url.pathname) {
      case '/start#om_oss':
        setSelectedTab(2)
        break
      case '/start':
        setSelectedTab(0)
        break
      case '/fastigheter':
        setSelectedTab(1)
        break
      case '/kontakta_oss':
        setSelectedTab(3)
        break
      default:
        break
    }
  }, [url])

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

  const tabs = ['Start', 'Våra fastigheter', 'Om oss', 'Kontakta oss']

  const desktopNavTabs = tabs.map((tab, index) => (
    <Tab
      key={tab}
      label={tab}
      value={index}
      className={classes.tabDesktop}
      component={tab === 'Om oss' ? HashLink : Link}
      to={tab === 'Om oss' ? '/start#about_us' : _.snakeCase(tab)}
      smooth={tab === 'Om oss' ? true : undefined}
      onClick={tab === 'Start' ? window.scrollTo({top: 0, behavior: 'smooth'}) : undefined}
      data-cy={`${_.kebabCase(tab)}-tab`}
    />
  ))

  const mobileNavTabs = tabs.map((tab, index) => (
    <Tab
      orientation="vertical"
      key={`${tab}-drawer`}
      label={tab}
      value={index}
      className={classes.tabMobile}
      component={tab === 'Om oss' ? HashLink : Link}
      to={tab === 'Om oss' ? '/start#about_us' : _.snakeCase(tab)}
      smooth={tab === 'Om oss' ? true : undefined}
      data-cy={`${_.kebabCase(tab)}-tab`}
      onClick={() => setDrawerOpen(false)}
    />
  ))

  const phoneButton = (
    <Button
      variant="contained"
      color="secondary"
      disableElevation
      className={classes.phoneButton}
      href="tel:+46 31-123-4567"
      data-cy="phone"
    >
      <PhoneIcon style={{ marginRight: '1rem' }} />
      <Typography>031-123-4567</Typography>
    </Button>
  )

  const navBar = (
    <>
      <Tabs value={selectedTab} style={{ marginLeft: 'auto' }}>
        {desktopNavTabs}
      </Tabs>
      {phoneButton}
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer
        data-cy="drawer"
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        {phoneButton}
        {mobileNavTabs}
        <img
          src={logo_no_text}
          style={{ height: '48px', margin: 'auto 0 1rem 0' }}
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
      <AppBar data-cy="header">
        <Toolbar disableGutters>
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
                onClick={window.scrollTo({top: 0,  behavior: 'smooth'})}
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
