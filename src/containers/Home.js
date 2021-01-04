import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => (

  <section className="hero is-medium is-primary is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Welcome To <strong>"DJ-AUTH"</strong>
        </h1>
        <h2 className="subtitle">
          Auth Sys
        </h2>
        <hr className="divider" />
        <h2 className="subtitle">
          Click to login
        </h2>
        <Link to="/login" className="button is-medium" style={{ textDecoration: "none" }}>Sign-In</Link>
      </div>
    </div>
  </section>

)

export default Home
