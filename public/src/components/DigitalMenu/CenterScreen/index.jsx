import React from 'react';
import './centerMinimal.scss';
import '../../DigitalMenu/snow.scss';
// images

import middle from '../../../../dist/assets/byobResized2.png';
import poke1 from '../../../../dist/assets/steps/pokegif3.gif';

const Center = () => (
  <div id="digitalCenter">
    <div class="winter-is-coming">
      <div class="snow snow--near"></div>
      <div class="snow snow--near snow--alt"></div>
      <div class="snow snow--mid"></div>
      <div class="snow snow--mid snow--alt"></div>
      <div class="snow snow--far"></div>
      <div class="snow snow--far snow--alt"></div>
    </div>
    <div className="digital_middle_left">
      <img src={middle} alt=""/>
    </div>
    <div className="digital_middle_right">
      <h1>Build Your Own Bowl</h1>
      <div className="digital_prices"><h3>Reg | $10.95</h3><h3>Lg | $12.95</h3><h3>Prm | $14.95</h3></div>
      <img src={poke1} alt=""/>
    </div>
  </div>
);

export default Center;