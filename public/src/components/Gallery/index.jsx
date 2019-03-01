import React from 'react';
import './gallery.scss';

import img1 from '../../../dist/resized/miso.jpg';
import img2 from '../../../dist/resized/poke.jpg';
import img3 from '../../../dist/resized/ton.jpg';
import img4 from '../../../dist/resized/karage.jpg';
import img5 from '../../../dist/resized/station.jpg';
import img6 from '../../../dist/resized/veggie.jpg';
import img7 from '../../../dist/resized/soup.jpg';
import img8 from '../../../dist/resized/gyoza.jpg';

const Gallery = () => (
  <div id="page-wrap" className="gallery-container">
    <div id="gallery">
      <div className="gallery-modal" data-aos="fade-up">
        <img src={img1} className="gallery-item" alt=""/>   
        <img src={img4} className="gallery-item" alt=""/>
        <img src={img2} className="gallery-item" alt=""/>        
        <img src={img3} className="gallery-item" alt=""/>
        <img src={img5} className="gallery-item" alt=""/>
        <img src={img6} className="gallery-item" alt=""/>
        <img src={img7} className="gallery-item" alt=""/>        
        <img src={img8} className="gallery-item" alt=""/>
      </div>
    </div>
  </div>
);

export default Gallery;