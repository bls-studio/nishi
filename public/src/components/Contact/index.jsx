import React from 'react';
import './contact.scss';

import logo from '../../../dist/assets/logowhite.png';
// Logos
import { Icon } from 'react-icons-kit';
import {instagram} from 'react-icons-kit/fa/instagram'
import {yelp} from 'react-icons-kit/fa/yelp'
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'


const Contact = () => (
  <div id="contact">
    <div className="contact-container" >
      <img src={logo} alt=""/>
      <div className="icons">
        <Icon icon={instagram} size={30}/>
        <Icon icon={yelp} size={30} />
        <Icon icon={facebookSquare} size={30}/>
      </div>
      <div className="contact-info">
        <div>P: (424) 361-5001</div>
        <div>E: info@nishipokeramen.com</div>
      </div>
      <div className="plug">Web design by BLS Studio</div>
    </div>
  </div>
);
export default Contact;