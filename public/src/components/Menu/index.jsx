import React from 'react';
import './menu.scss';

import tonkotsu from '../../../dist/assets/TATSU-ITE-OLD-SKOOL.jpg';
import miso from '../../../dist/assets/TATSU-ITE-BOLD.jpg';
import veggie from '../../../dist/assets/TATSU-ITE-HIPPIE.jpg';
import shoyu from '../../../dist/assets/TATSU-ITE-CHEEKY.jpg';

const Menu = () => (
  <div id="menu">
    <div className="section-header">
      <h3 className="section-title">Our Menu</h3>
      {/* <p>At Nishi Poke & Ramen Bistro, we see Japanese cuisine as an art.  In every dish we make, we put our love and passion for food to craft the freshest and tastiest dishes. We simmer our broth for 24 hours and create our dishes from scratch everyday. We also selectively choose sushi grade fresh fish daily to offer only the best to our customers. </p> */}
    </div>
    <div className="menu-container">
      <h3>Ramen</h3>
      <div className="ramen">
        <div className="menu-item">
          <img src={tonkotsu} className="menu-image"></img>
          <h3 className="menu-title">Tonkotsu</h3>
          <div className="menu-slide">
            <p className="menu-description">Our Signature Tonkotsu Ramen
              Homemade Pork broth, braised pork belly, green onion, shitake mushroom and nori</p>
          </div>
        </div>
        <div className="menu-item">
          <img src={miso} className="menu-image"></img>
          <h3 className="menu-title">Red Miso</h3>
          <div className="menu-slide">
            <p className="menu-description">Spicy Ramen 
              Homemade pork broth, spicy pork, chili garlic sauce, green onion, soft boiled egg, wood ear mushroom, crispy onion and nori </p>
          </div>
        </div>
        <div className="menu-item">
          <img src={shoyu} className="menu-image"></img>
          <h3 className="menu-title">Shoyu</h3>
          <div className="menu-slide">
            <p className="menu-description">Black Ramen 
              Homemade pork broth, black garlic oil, sweet umami sauce, braised pork belly, green onion, shitake mushroom and crispy onion</p>
          </div>
        </div>
        <div className="menu-item">
          <img src={veggie} className="menu-image"></img>
          <h3 className="menu-title">Veggie</h3>
          <div className="menu-slide">
            <p className="menu-description">Green Ramen
              Homemade pork broth, house pesto, chicken breast, soft boiled egg, grated garlic and nori</p>
          </div>
        </div>
      </div>
      <div className="poke">
        <h3>Poke</h3>
        
      </div>
    </div>
  </div>
);
export default Menu;