import React from 'react';
import './landing.scss';
import '../Menu/menu.scss';

import hero from '../../../dist/assets/logowhite.png';
import cook from '../../../dist/assets/cook.jpg'
// import poke from '../../../dist/assets/pokeTransLarge.png';
// import ramen from '../../../dist/assets/ramenTrans.png';

import tonkotsu from '../../../dist/resized/pmton.jpg';
import miso from '../../../dist/resized/pmmiso.jpg';
import veggie from '../../../dist/resized/pmveg.jpg';
import shoyu from '../../../dist/resized/pmshoyu.jpg';
import poke from '../../../dist/resized/pmpoke.jpg';

const Landing = () => (
  <div id="page-wrap" className="landing">
    <div className="MainContainer">
      <div className="ParallaxContainer">
        <img src={hero} alt="" className="hero"/>
      </div>
      <div className="ContentContainer">
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
        {/* data-aos="fade-up" */}
        <div className="menu-box">
          <div id="menu">
            <div className="section-header">
              <h3 className="section-title">Our Menu</h3>
            </div>
            <div className="menu-container">
              <h3>Ramen</h3>
              <div className="ramen">
                <div className="menu-item">
                  <img src={tonkotsu} className="menu-image"></img>
                  <h3 className="menu-title">Tonkotsu</h3>
                  <div className="menu-slide">
                    <p className="menu-description">Pork broth, pork chashu, green onion, spinach, bean sprouts, seaweed.</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img src={miso} className="menu-image"></img>
                  <h3 className="menu-title">Spicy Miso</h3>
                  <div className="menu-slide">
                    <p className="menu-description">Miso broth, pork chashu, green onion, spinach, bean sprouts, cabbage, bamboo shoots, seaweed.</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img src={shoyu} className="menu-image"></img>
                  <h3 className="menu-title">Chicken Shoyu</h3>
                  <div className="menu-slide">
                    <p className="menu-description">Chicken Broth, Chasu, White Onions, Bamboo Shoots, Seaweed, Alfalfa Sprouts.</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img src={veggie} className="menu-image"></img>
                  <h3 className="menu-title">Vegetarian</h3>
                  <div className="menu-slide">
                    <p className="menu-description">Sesame miso broth, broccoli, tofu, corn, bean sprouts, spring mix, sesame oil.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    {/* </div> */}
      {/* <div className="home-static"> */}
  </div>
);

export default Landing;
        {/* <img src={ramen} className="ramenImg" alt=""/>
        <img src={poke} className="poke" alt=""/> */}
        {/* <div className="parallax__overlay"></div> */}
        {/* <h3 className="tagline">A creative web development studio.</h3> */}
        {/* <p cla ssName="home-tagline">Connecting through code, design, & innovation.</p> */}
    {/* <div id="home">
      <div className="home-container">
      </div>
    </div> */}