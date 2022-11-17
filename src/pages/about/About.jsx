import React from "react";
import "./about.css";
import rahul from "./images/rahul.jpg"
import praveen from "./images/praveen.PNG"
import navjeet from "./images/navjeet.jpg"

const About = () => {
  return (
    <div>
      <section class="team-section">
        <div class="container">
          <div class="row">
            <div class="section-title">
              <h1>Our Team</h1>
              <p>
              We are a bunch of guys who try to solve real world problems with the help of Technology and try learning stuff by implementing it. This website is the product of that process! We enjoyed building this website and hope you enjoy using it.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="team-items">
              <div class="item">
                <img src="" alt="team" />
                <div class="inner">
                  <div class="info">
                    <h5>Sahil Halgekar</h5>
                    <div class="social-links">
                        <a href="https://www.instagram.com/" target="_blank">
                            <span class="fa fa-instagram"></span>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src={rahul} alt="team" />
                <div class="inner">
                  <div class="info">
                    <h5>Rahul Patil</h5>
                    <div class="social-links">
                        <a href="https://www.instagram.com/rahul_patil_33" target="_blank">
                            <span class="fa fa-instagram"></span>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src={navjeet} alt="team" />
                <div class="inner">
                  <div class="info">
                    <h5>Navjeet Kohli</h5>
                    <div class="social-links">
                        <a href="https://www.instagram.com/navjeet.kohli02" target="_blank">
                            <span class="fa fa-instagram"></span>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src={praveen} alt="team" />
                <div class="inner">
                  <div class="info">
                    <h5>Praveen Jugal</h5>
                    <div class="social-links">
                        <a href="https://www.instagram.com/prav_752" target="_blank">
                            <span class="fa fa-instagram"></span>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
