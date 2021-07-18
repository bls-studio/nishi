import React from 'react';
import './leftMinimal.scss';
import '../../DigitalMenu/snow.scss';


// import left from '../../../../dist/assets/resizedRight.png';
// import left from '../../../../dist/assets/nishi_left.png';
// import left from '../../../../dist/assets/left-theme-ocean.png';
import left from '../../../../dist/assets/left-theme-simple.jpg';



const Left = () => (
  <div id="digitalLeft">
  {/* <div class="winter-is-coming">
    <div class="snow snow--near"></div>
    <div class="snow snow--near snow--alt"></div>
    <div class="snow snow--mid"></div>
    <div class="snow snow--mid snow--alt"></div>
    <div class="snow snow--far"></div>
    <div class="snow snow--far snow--alt"></div>
  </div> */}
    <img src={left} alt=""/>
  </div>
);
export default Left;
