import {IndexLink, Link } from 'react-router'
import React from 'react'

const Header= ()=> {
  return (
    <nav >
      <IndexLink to="/" activeClassName="active">SignUp</IndexLink>
      {"|"}
      <Link to="/login" activeClassName="active">Login</Link>
    </nav>
  )
}

export default Header