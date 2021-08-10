import React from 'react'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { makeStyles } from '@material-ui/core'

const _ = require('lodash')
const useStyles = makeStyles({
  tabDesktop: {
    minWidth: 10,
    marginRight: '2rem',
  },
  tabMobile: {
    width: '50vw',
  },
})

const Tab = ({
  label,
  value,
  drawer = false,
  scroll = false,
  setDrawerOpen = () => {},
}) => {
  const classes = useStyles()
  let noRedirect = useRouteMatch(_.snakeCase(label))
  
  const handleClick = () => {    
    if (noRedirect) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    if (drawer) {
      setDrawerOpen(false)
    }
  }

  return (
    <Tab
      orientation={drawer ? 'vertical' : undefined}
      key={drawer ? `${label}-drawer` : label}
      label={label}
      value={value}
      className={drawer ? classes.tabMobile : classes.tabDesktop}
      component={scroll ? HashLink : Link}
      to={scroll ? `/start#${_.snakeCase(label)}` : _.snakeCase(label)}
      smooth={scroll ? true : undefined}
      data-cy={`${_.kebabCase(label)}-tab`}
      onClick={handleClick}
    />
  )
}

export default Tab
