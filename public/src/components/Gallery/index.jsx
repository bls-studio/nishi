import React from 'react';
import './gallery.scss';

const img1 = 'https://s3.amazonaws.com/nishi-blakeswl/miso.jpg';
const img2 = 'https://s3.amazonaws.com/nishi-blakeswl/poke.jpg';
const img3 = 'https://s3.amazonaws.com/nishi-blakeswl/ton.jpg';
const img4 = 'https://s3.amazonaws.com/nishi-blakeswl/karage.jpg';
const img5 = 'https://s3.amazonaws.com/nishi-blakeswl/station.jpg';
const img6 = 'https://s3.amazonaws.com/nishi-blakeswl/veggie.jpg';
const img7 = 'https://s3.amazonaws.com/nishi-blakeswl/soup.jpg';
const img8 = 'https://s3.amazonaws.com/nishi-blakeswl/gyoza.jpg';

const Gallery = () => (
  <div id="page-wrap" className="gallery-container">
    <div id="gallery">
      <div className="gallery-modal" data-aos="fade-up">
        <img src={img1} className="gallery-item" alt="spicy-miso-ramen"/>   
        <img src={img4} className="gallery-item" alt="chicken-karage"/>
        <img src={img2} className="gallery-item" alt="poke"/>        
        <img src={img3} className="gallery-item" alt="tonkatsu-ramen"/>
        <img src={img5} className="gallery-item" alt="poke-station"/>
        <img src={img6} className="gallery-item" alt="vegetarian-ramen"/>
        <img src={img7} className="gallery-item" alt="broth"/>        
        <img src={img8} className="gallery-item" alt="gyoza"/>
      </div>
    </div>
  </div>
);

export default Gallery;