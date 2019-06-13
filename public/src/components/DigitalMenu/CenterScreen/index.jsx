import React from 'react';
import './centerMinimal.scss';

// images

import middle from '../../../../dist/assets/byobResized2.png';
import poke1 from '../../../../dist/assets/steps/pokegif3.gif';

const Center = () => (
  <div id="digitalCenter">
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