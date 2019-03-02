import React from 'react';
import './contact.scss';

const hero = 'https://s3.amazonaws.com/nishi-blakeswl/logowhite.png';
// Logos
import { Icon } from 'react-icons-kit';
import {instagram} from 'react-icons-kit/fa/instagram'
import {yelp} from 'react-icons-kit/fa/yelp'
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'


const Contact = () => (
  <div id="contact">
    <div className="contact-container" >
      <img src={hero} alt=""/>
      <div className="icons">
        <a href="https://www.instagram.com/nishipokeramen/" target="_blank"><Icon icon={instagram} size={30}/></a>
        <a href="https://www.yelp.com/biz/nishi-poke-and-ramen-bistro-los-angeles-3" target="_blank"><Icon icon={yelp} size={30} /></a>
        <a href="https://www.facebook.com/nishipokeramen/" target="_blank"><Icon icon={facebookSquare} size={30}/></a>
      </div>
      <div className="contact-info">
        <div>P: (424) 361-5001</div>
        <div>E: info@nishipokeramen.com</div>
      </div>
      <div className="plug">Web design by <a href="https://www.blakeswl.me/" target="_blank">BLS Studio</a></div>
    </div>
  </div>
);
export default Contact;