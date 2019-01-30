import React from 'react';
import './menu.scss';

import tonkotsu from '../../../dist/resized/pmton.jpg';
import miso from '../../../dist/resized/pmmiso.jpg';
import veggie from '../../../dist/resized/pmveg.jpg';
import shoyu from '../../../dist/resized/pmshoyu.jpg';

const Menu = () => (
  <div id="page-wrap">
    <div id="menu">
      <div className="section-header" data-aos="fade-up">
        <h3 className="section-title">Our Menu</h3>
        {/* <p>At Nishi Poke & Ramen Bistro, we see Japanese cuisine as an art.  In every dish we make, we put our love and passion for food to craft the freshest and tastiest dishes. We simmer our broth for 24 hours and create our dishes from scratch everyday. We also selectively choose sushi grade fresh fish daily to offer only the best to our customers. </p> */}
      </div>
      <div className="menu-container">
        <h3>Ramen</h3>
        <div className="ramen" >
          <div className="menu-item">
            <img src={tonkotsu} className="menu-image"></img>
            <h3 className="menu-title">Tonkotsu</h3>
            <div className="menu-slide">
              <p className="menu-description">Pork broth, pork chashu, green onion, spinach, bean sprouts, seaweed.</p>
            </div>
          </div>
          <div className="menu-item">
            <img src={miso} className="menu-image"></img>
            <h3 className="menu-title">Red Miso</h3>
            <div className="menu-slide">
              <p className="menu-description">Miso broth, pork chashu, green onion, spinach, bean sprouts, cabbage, bamboo shoots, seaweed.</p>
            </div>
          </div>
          <div className="menu-item">
            <img src={shoyu} className="menu-image"></img>
            <h3 className="menu-title">Shoyu</h3>
            <div className="menu-slide">
              <p className="menu-description">Chicken Broth, Chasu, White Onions, Bamboo Shoots, Seaweed, Alfalfa Sprouts.</p>
            </div>
          </div>
          <div className="menu-item">
            <img src={veggie} className="menu-image"></img>
            <h3 className="menu-title">Veggie</h3>
            <div className="menu-slide">
              <p className="menu-description">Sesame miso broth, broccoli, tofu, corn, bean sprouts, spring mix, sesame oil.</p>
            </div>
          </div>
        </div>
        <div className="poke">
          <h3>Poke</h3>

        </div>
      </div>
    </div>
  </div>
);
export default Menu;