import React, { useState, useEffect } from 'react'
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
  Typography,
} from '@material-ui/core'
import logo_web_timotuz from '../../assets/images/logo_web_timotuz.svg'
import logo_no_text from '../../assets/images/logo_no_text.svg'
import theme from '../../theme/theme'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import PhoneIcon from '@material-ui/icons/Phone'
import AdaptiveHelper from '../../modules/AdaptiveHelper'
import Tab from './Tab'

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
  phoneButton: {
    borderRadius: 0,
    height: '4rem',
    padding: '0 1.5rem',
  },
  hamburger: { margin: ' 0 12px 0 auto' },
})

const Header = () => {
  let currentUrl = useLocation().pathname
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = useState(0)
  //const [urlValues, setUrlValues] = useState()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const tabs = ['Start', 'Våra fastigheter', 'Om oss', 'Kontakta oss']

  useEffect(() => {
    const urlValues = {
      '/start': 0,
      '/vara_fastigheter': 1,
      '/om_oss': 2,
      '/kontakta_oss': 3,
    }

    AdaptiveHelper.muiActiveTabSelect(currentUrl, urlValues, setSelectedTab)
  }, [currentUrl])

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
        {tabs.map((tab, index) => (
          <Tab label={tab} value={index} />
        ))}
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
        {tabs.map((tab, index) => (
          <Tab
            label={tab}
            value={index}
            drawer={true}
            setDrawerOpen={setDrawerOpen}
          />
        ))}
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
