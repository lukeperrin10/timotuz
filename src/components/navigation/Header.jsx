import React, { useState } from 'react'
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
    marginRight: '24px',
  },
  phoneButton: {
    borderRadius: 0,
    height: '4rem',
  },
})

const Header = () => {
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = useState(0)

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

  const handleChange = (event, value) => {
    setSelectedTab(value)
  }

  const navMenu = ['Start', 'Fastigheter', 'Om oss', 'Kontakta oss'].map(
    (tab, index) => (
      <Tab key={tab} label={tab} value={index} className={classes.tab} />
    )
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
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            style={{ marginLeft: 'auto' }}
          >
            {navMenu}
          </Tabs>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            className={classes.phoneButton}
            href="tel:+46 31-123-4567"
          >
            031-123-4567
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
