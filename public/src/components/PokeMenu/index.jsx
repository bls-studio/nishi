import React from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';


const transPoke = 'https://s3.amazonaws.com/nishi-blakeswl/pokeTransLarge.png';
import pokegif from '../../../dist/resized/pokegif3.gif';

import './pokeMenu.scss';


const PokeMenu = () => (
  <div id="menu" className="pokeCon">
    <div className="section-header">
      <h3 className="section-title">Our Menu</h3>
    </div>
    <h3 className="menu-category">Poke</h3>
    <div id="pokeMenu">
      <div className="pokeLeft">
        <img src={transPoke} className="pokeImage1" alt="poke" data-aos-offset="500" data-aos-duration="200" data-aos-easing="linear"/>
        <h3 className="pokeTitle">Signature &</h3>
        <h3 className="pokeTitle">Build Your Own Bowls</h3>
      </div>
      <div className="pokeRight">
        <div className="left_left">
          <div id="pokeItems">
            <div className="itemNprice">
              <h3 className="item">Aloha Bowl</h3>
            </div>
            <p>Hawaiian Salmon, Hawaiian Tuna, Spicy Tuna, Crabmeat, Spicy Mayo, Eel Sauce</p>
          </div>
          <div id="pokeItems">
            <div className="itemNprice">
                <h3 className="item">Hoku Bowl</h3>
            </div>
            <p>Ahi Tuna, Albacore, Spicy Tuna, Crabmeat, Ponzu, Sesame Oil</p>
          </div>
          <div id="pokeItems">
            <div className="itemNprice">
              <h3 className="item">Koa Bowl 🌶</h3>
            </div>
            <p>Hawaiian Salmon, Hawaiian Tuna, Spicy Tuna, Albacore, Crabmeat, Sesame Oil, Danger Sauce, Spicy Ponzu</p>
          </div>
          <div id="pokeItems">
            <div className="itemNprice">
              <h3 className="item">Moana Bowl</h3>
            </div>
            <p>Shrimp, Octopus, Scallops, Tuna, Crabmeat, Pineapple, Spicy Mayo, Eel Sauce, Sesame Oil</p>
          </div>
          <div id="pokeItems">
            <div className="itemNprice">
              <h3 className="item">Ono Bowl</h3>
            </div>
            <p>Hawaiian Salmon, Hawaiian Tuna, Spicy Tuna, Shrimp, Crabmeat, Avocado, Spicy Mayo, Eel Sauce, Sesame Oil</p>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default PokeMenu;