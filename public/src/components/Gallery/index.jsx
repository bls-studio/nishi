import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import './gallery.scss';

import img1 from '../../../dist/assets/Nishi_13.jpg';
import img2 from '../../../dist/assets/Nishi_20.jpg';
import img3 from '../../../dist/assets/IMG_0545.jpg';
import img4 from '../../../dist/assets/IMG_0537.jpg';
import img5 from '../../../dist/assets/IMG_0239.jpg';
import img6 from '../../../dist/assets/DSC07728.jpg';
import img7 from '../../../dist/assets/DSC07366.jpg';
import img8 from '../../../dist/assets/DSC07278.jpg';
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
  <div id="page-wrap">
    <div id="gallery">
      <div className="gallery-modal">
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