import React from 'react'
import Navbar from "../components/Navbar"

const Layout = (props) => (
    <>
      <Navbar />
    <section className="section">
      
        {props.children}
    </section>
    </>

)

export default Layout