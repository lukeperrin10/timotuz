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
} from '@material-ui/core'
import logo_web_timotuz from '../../assets/images/logo_web_timotuz.svg'
import theme from '../../theme/theme'
import { Link, useLocation } from 'react-router-dom'

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
  tab: {
    minWidth: 10,
    marginRight: '24px',
  },
  phoneButton: {
    borderRadius: 0,
    height: '4rem',
  },
})

const Header = () => {
  let url = useLocation()
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = useState(0)

  useEffect(() => {
    switch (url.pathname) {
      case '/start':
        setSelectedTab(0)
        break
      case '/fastigheter':
        setSelectedTab(1)
        break
      case '/om_oss':
        setSelectedTab(2)
        break
      case '/kontakta_oss':
        setSelectedTab(3)
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

  const navMenu = ['Start', 'Fastigheter', 'Om oss', 'Kontakta oss'].map(
    (tab, index) => (
      <Tab
        key={tab}
        label={tab}
        value={index}
        className={classes.tab}
        component={Link}
        to={_.snakeCase(tab)}
        data-cy={`${_.kebabCase(tab)}-tab`}
      />
    )
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
                style={{ height: '30px' }}
                data-cy="logo"
                alt="Timotuz Company Logo"
              />
            </Button>
          </Grid>
          <Tabs value={selectedTab} style={{ marginLeft: 'auto' }}>
            {navMenu}
          </Tabs>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            className={classes.phoneButton}
            href="tel:+46 31-123-4567"
            data-cy="phone"
          >
            031-123-4567
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
