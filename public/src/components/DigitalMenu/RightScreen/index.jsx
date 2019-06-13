import React from 'react';
import './right.scss';
import { Slide, Fade } from 'react-slideshow-image';
import sushi from '../../../../dist/assets/IMG_2563.jpg'



const tunaRoll = 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80';
const roll = 'https://images.unsplash.com/photo-1559589311-5f288a90d311?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80';
const salmon = 'https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80';

import right1 from '../../../../dist/assets/right1b.png';
import right2 from'../../../../dist/assets/right2.png';
import sushiMenu from '../../../../dist/assets/sushi.png'


const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  autoplay: true,
}
const slideImages = [
  tunaRoll,
  roll,
  salmon,
  sushi,

];
const fadeProperties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  arrows: false,
  autoplay: true
}
const fadeImages = [
  right1,
  right2
];
 


const Right = () => (
  <div id="digitalRight">
    <div className="digital_right_screen">
      <h1 className="right__title">Signature Rolls</h1>
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </div>
        </div>
      </Slide>
    </div>
    <div className="digital_slideshow">
      <img src={sushiMenu} alt=""/>
    </div>
  </div>
);
export default Right;

    