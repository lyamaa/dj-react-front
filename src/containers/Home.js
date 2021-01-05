import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/main.css'

import Lock from "../assets/src/img/biometrics.jpg"
import Lock1 from "../assets/src/img/simul.png"
import Lock2 from "../assets/src/img/simulator.jpeg"


const Home = () => (
  <>
  <section className="hero is-medium is-dark is-bold">
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
  <div class="container">
      <div class="section">
        <div class="columns">
          <div class="column has-text-centered">
            <h1 class="title" style={{color: "ghostwhite"}}>Dj AUTH</h1><br />
          </div>
        </div>
        <div id="app" class="row columns is-multiline">
          <div  class="column is-4">
            <div class="card large">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img src={Lock} alt="Image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src={Lock} alt="Image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4 no-padding">DEMO</p>
                    <p>
                      <span class="title is-6">
                        <a href="/"> DEMO</a> </span> </p>
                    <p class="subtitle is-6"></p>
                  </div>
                </div>
                <div class="content">
                  DEMO
                  <div class="background-icon"><span class="icon-twitter"></span></div>
                </div>
              </div>
            </div>
          </div>
          <div  class="column is-4">
            <div class="card large">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img src={Lock1} alt="Image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src={Lock1} alt="Image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4 no-padding">DEMO</p>
                    <p>
                      <span class="title is-6">
                        <a href="/"> DEMO</a> </span> </p>
                    <p class="subtitle is-6"></p>
                  </div>
                </div>
                <div class="content">
                  DEMO
                  <div class="background-icon"><span class="icon-twitter"></span></div>
                </div>
              </div>
            </div>
          </div>
          <div  class="column is-4">
            <div class="card large">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img src={Lock2} alt="Image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src={Lock2} alt="Image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4 no-padding">DEMO</p>
                    <p>
                      <span class="title is-6">
                        <a href="/"> DEMO</a> </span> </p>
                    <p class="subtitle is-6"></p>
                  </div>
                </div>
                <div class="content">
                  DEMO
                  <div class="background-icon"><span class="icon-twitter"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
    
</>
)

export default Home
