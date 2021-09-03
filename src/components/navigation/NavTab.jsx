import React from 'react'
import { Tab } from '@material-ui/core'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { withStyles } from '@material-ui/core'

const _ = require('lodash')

const StyledTab = withStyles((theme) => ({
  root: {
    minWidth: 10,
    paddingTop: '17px',
    paddingBottom: '17px',
    marginRight: '2rem',
    fontSize: '18px',
    fontStyle: 'regular',
    fontWeight: 400,
    color: '#fff',
    opacity: 1,
    height: '100%',
    '&:focus': {
      opacity: 1,
    },
    '&:hover': {
      color: '#03292C',
      backgroundColor: 'rgba( 255, 255, 255, 0.2)'
    },
  },
}))((props) => <Tab disableRipple {...props} />)

const StyledTabMobile = withStyles((theme) => ({
  root: {
    minWidth: '100vw',
    maxWidth: '100vw',
    opacity: '1',
    fontSize: '18px',
    fontStyle: 'regular',
    fontWeight: 400,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab {...props} />)

const NavTab = ({
  label,
  value,
  drawer = false,
  scroll = false,
  setDrawerOpen = () => {},
}) => {
  let noRedirect = useRouteMatch(_.snakeCase(label))

  const handleClick = () => {
    if (noRedirect) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    if (drawer) {
      setDrawerOpen(false)
    }
  }

  return (!drawer ? (
    <StyledTab    
      label={label}
      value={value}
      component={scroll ? HashLink : Link}
      to={scroll ? `/hem#${_.snakeCase(label)}` : _.snakeCase(label)}
      smooth={scroll ? true : undefined}
      data-cy={`${_.kebabCase(label)}-tab`}
      onClick={handleClick}
    />
  ) : (
    <StyledTabMobile
      orientation='vertical'
      label={label}
      value={value}
      component={scroll ? HashLink : Link}
      to={scroll ? `/hem#${_.snakeCase(label)}` : _.snakeCase(label)}
      smooth={scroll ? true : undefined}
      data-cy={`${_.kebabCase(label)}-tab`}
      onClick={handleClick}
    />)
  )
}

export default NavTab
