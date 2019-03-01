import React from 'react';
import transpoke from '../../../dist/assets/ramenTrans.png';

import './ramenMenu.scss';


const RamenMenu = () => (
  <div id="ramenMenu">
    <div className="ramenRight">
      <div className="left_left">
        <div id="ramenItems">
          <div className="itemNprice">
            <h3 className="item tonkatsu">Tonkatsu</h3>
          </div>
          <p>Pork broth, pork chashu, green onion, spinach, bean sprouts, seaweed.</p>
        </div>
        <div id="ramenItems">
          <div className="itemNprice">
              <h3 className="item">Spicy Miso 🌶</h3>
            </div>
            <p>Miso broth, pork chashu, green onion, spinach, bean sprouts, cabbage, bamboo shoots, seaweed.</p>
          </div>
        <div id="ramenItems">
          <div className="itemNprice">
            <h3 className="item">Chicken Shoyu</h3>
          </div>
          <p>Chicken Broth, Chicken, White Onions, Bamboo Shoots, Seaweed, Alfalfa Sprouts.</p>
        </div>
        <div id="ramenItems">
          <div className="itemNprice">
            <h3 className="item">Vegetarian</h3>
          </div>
          <p>Sesame miso broth, broccoli, tofu, corn, bean sprouts, spring mix, sesame oil.</p>
        </div>
      </div>
    </div>
    <div className="ramenLeft">
      <img src={transpoke} className="ramenImage1"/>
      <h3 className="ramenTitle">Tonkatsu</h3>
    </div>
  </div>
);

export default RamenMenu;