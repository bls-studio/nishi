import React from 'react';
import './comingSoon.scss';

import poke1 from '../../../dist/assets/steps/pokegif3.gif';
import logo from '../../../dist/assets/logo_corrected.png';

const ComingSoon = () => (
  <div id="comingSoon">
    <img className="soonLogo" src={logo} alt=""/>
    <img className="soonPoke" src={poke1} alt=""/>
    <h1>Coming soon</h1>
    <h3>La Cienaga/Jefferson</h3>
  </div>
);
export default ComingSoon;