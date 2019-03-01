import React from 'react';
import './menu.scss';

import PokeMenu from '../PokeMenu';
import RamenMenu from '../RamenMenu';

import tonkotsu from '../../../dist/resized/pmton.jpg';
import miso from '../../../dist/resized/pmmiso.jpg';
import veggie from '../../../dist/resized/pmveg.jpg';
import shoyu from '../../../dist/resized/pmshoyu.jpg';

import menuPDF from '../../../dist/assets/menu.pdf';

const Menu = () => (
  <div id="page-wrap" className="menu-box parallax__group">
    <div className="section-header">
      <h3 className="section-title">Our Menu</h3>
    </div>
    <div id="menu">
      {/* <div className="menu-container"> */}
        <h3 className="menu-category">Poke</h3>
        {/* <PokeMenu /> */}
        <h3 className="menu-category">Ramen</h3>
        {/* <RamenMenu /> */}
        {/* <div className="ramen">
          <div className="menu-item" data-aos="fade-up">
            <img src={tonkotsu} className="menu-image"></img>
            <h3 className="menu-title">Tonkotsu</h3>
            <div className="menu-slide">
              <p className="menu-description">Pork broth, pork chashu, green onion, spinach, bean sprouts, seaweed.</p>
            </div>
          </div>
          <div className="menu-item" data-aos="fade-up">
            <img src={miso} className="menu-image"></img>
            <h3 className="menu-title">Spicy Miso 🌶</h3>
            <div className="menu-slide">
              <p className="menu-description">Miso broth, pork chashu, green onion, spinach, bean sprouts, cabbage, bamboo shoots, seaweed.</p>
            </div>
          </div>
          <div className="menu-item" data-aos="fade-up">
            <img src={shoyu} className="menu-image"></img>
            <h3 className="menu-title">Chicken Shoyu</h3>
            <div className="menu-slide">
              <p className="menu-description">Chicken Broth, Chicken, White Onions, Bamboo Shoots, Seaweed, Alfalfa Sprouts.</p>
            </div>
          </div>
          <div className="menu-item" data-aos="fade-up">
            <img src={veggie} className="menu-image"></img>
            <h3 className="menu-title">Vegetarian</h3>
            <div className="menu-slide">
              <p className="menu-description">Sesame miso broth, broccoli, tofu, corn, bean sprouts, spring mix, sesame oil.</p>
            </div>
          </div>
        </div> */}
        <div className="menu-download"><h3>View our full menu </h3>{' '}<a href={menuPDF} target="_blank">HERE</a></div>
      </div>
    {/* </div> */}
  </div>
);
export default Menu;
        {/* <div className="poke">
          <h3>Poke</h3>
          <div className="poke-container">
            <div className="poke-item">
              <img src={poke} alt="" className="poke-image"/>

            </div>
          </div>
        </div> */}

                {/* <div className="menu-item" data-aos="fade-up">
            <div className="menu-image">
              <img src={tonkotsu}></img>
            </div>
            <div className="menu-con">
              <h3 className="menu-title">Tonkotsu</h3>
              <div className="menu-slide">
                <p className="menu-description">Pork broth, pork chashu, green onion, spinach, bean sprouts, seaweed.</p>
              </div>
            </div>
          </div> */}