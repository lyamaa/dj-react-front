import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/src/img/auth.png"

import { connect } from 'react-redux'
import { logout } from "../management/actions/auth"

const Navbar = ({ logout, isAuthenticated }) => {

  const guestLink = () => (
    <Fragment>
      <div className="buttons">
        <Link to="/register" className="button is-primary">
          <strong>Sign up</strong>
        </Link>
        <Link to="/login" className="button is-light">
          Log in
                </Link>
      </div>
    </Fragment>
  )

  const authLink = () => (
    <Link href="#!" className="button is-light" onClick={logout}>
      Logout
    </Link>
  )
  
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logo} alt="logo" width="112" height="100" />
        </Link>

        <Link to="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
            </Link>

          <Link to="#" className="navbar-item">
            Documentation
            </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="#" className="navbar-link">
              More
              </Link>

            <div className="navbar-dropdown">
              <Link to="/" className="navbar-item">
                About
                </Link>
              <Link to="#" className="navbar-item">
                Jobs
                </Link>
              <Link to="#" className="navbar-item">
                Contact
                </Link>
              <hr className="navbar-divider" />
              <Link to="#" className="navbar-item">
                Report an issue
                </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            {/* fragments */}
            {isAuthenticated ? authLink(): guestLink()}
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar)
