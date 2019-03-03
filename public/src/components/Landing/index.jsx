import React from 'react';
import './landing.scss';
import { Parallax } from 'react-scroll-parallax';

const hero = 'https://s3.amazonaws.com/nishi-blakeswl/cream.png';
// const  cook = 'https://s3.amazonaws.com/nishi-blakeswl/cook.jpg';

const Landing = () => (
  <div id="page-wrap" className="landing" >
    <div id="home">
      <div className="home-container">
        <img src={hero} alt="nishi logo" className="hero"/>
      </div>
    </div>
    <div id="about">
      <h3>Our Story</h3>
      <div className="about-container" data-aos="fade-up">
        <div className="about-left">
          <p>At Nishi Poke & Ramen Bistro, we see Japanese cuisine as an art.  In every dish we make, we put our love and passion for food to craft the freshest and tastiest dishes. We simmer our broth for 24 hours and create our dishes from scratch everyday. We also selectively choose sushi grade fresh fish daily to offer only the best to our customers. </p>
        </div>
        <div className="about-right">
          {/* <img className="about-image" src={cook} alt=""/> */}
        </div>
      </div>
    </div>
  </div>

);

export default Landing;

    {/* <ParallaxBanner
    className="custom-class landing"
    layers={[
        {
            image: 'https://s3.amazonaws.com/nishi-blakeswl/holding.jpg',
            amount: 0.1,
            slowerScrollRate: 10,
        },
       
    ]}
    style={{
        height: '100vh',
    }}
          >
    </ParallaxBanner> */}