import React, { useEffect } from 'react'
import Navbar from "../components/Navbar"


import { connect } from 'react-redux'
import { checkAuthenticated, load_user } from '../management/actions/auth'

const Layout = ({checkAuthenticated, load_user, children}) => {

  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, [])
  return (
    <>
      <Navbar />
      <section className="section" >

        {children}
      </section>
     
    </>

  )
}

export default connect(null, { checkAuthenticated, load_user })(Layout);