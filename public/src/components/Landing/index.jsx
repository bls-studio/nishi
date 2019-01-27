import React from 'react';
import './landing.scss';

// import hero from '../../../dist/assets/download1.jpg';
import hero from '../../../dist/assets/logowhite.png';
import cook from '../../../dist/assets/cook.jpg'

const Landing = () => (
  <div id="page-wrap" className="landing">
    <div id="home">
      <div className="home-container">
        <img src={hero} alt="" className="hero"/>
        {/* <div>Nishi Poke & Ramen</div> */}
      </div>
    </div>
    <div id="about">
      <div className="about-container">
        <div className="about-left">
          <h3>Our Story</h3>
          <p>At Nishi Poke & Ramen Bistro, we see Japanese cuisine as an art.  In every dish we make, we put our love and passion for food to craft the freshest and tastiest dishes. We simmer our broth for 24 hours and create our dishes from scratch everyday. We also selectively choose sushi grade fresh fish daily to offer only the best to our customers. </p>
        </div>
        <div className="about-right">
          <img className="about-image" src={cook} alt=""/>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;