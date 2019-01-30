import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import './gallery.scss';

import img1 from '../../../dist/resized/miso.jpg';
import img2 from '../../../dist/resized/poke.jpg';
import img3 from '../../../dist/resized/ton.jpg';
import img4 from '../../../dist/resized/karage.jpg';
import img5 from '../../../dist/resized/station.jpg';
import img6 from '../../../dist/resized/veggie.jpg';
import img7 from '../../../dist/resized/soup.jpg';
import img8 from '../../../dist/resized/gyoza.jpg';
// // DSC07143.jpg
// const images = [
//   '../../../dist/assets/Nishi_13.jpg',
//   '../../../dist/assets/Nishi_20.jpg',
//   '../../../dist/assets/IMG_0545.jpg',
//   '../../../dist/assets/IMG_0537.jpg',
//   '../../../dist/assets/IMG_0239.jpg',
//   '../../../dist/assets/DSC07728.jpg',
//   '../../../dist/assets/DSC07366.jpg',
//   '../../../dist/assets/DSC07278.jpg'
// ]


// export default class Gallery extends Component {
//   constructor(props) {
//     super(props);
 
//     this.state = {
//       photoIndex: 0,
//       isOpen: false,
//     };
//   }
 
//   render() {
//     const { photoIndex, isOpen } = this.state;
 
//     return (
//       <div>
//         <button type="button" onClick={() => this.setState({ isOpen: true })}>
//           Open Lightbox
//         </button>
 
//         {isOpen && (
//           <Lightbox
//             mainSrc={images[photoIndex]}
//             nextSrc={images[(photoIndex + 1) % images.length]}
//             prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//             onCloseRequest={() => this.setState({ isOpen: false })}
//             onMovePrevRequest={() =>
//               this.setState({
//                 photoIndex: (photoIndex + images.length - 1) % images.length,
//               })
//             }
//             onMoveNextRequest={() =>
//               this.setState({
//                 photoIndex: (photoIndex + 1) % images.length,
//               })
//             }
//           />
//         )}
//       </div>
//     );
//   }
// }
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