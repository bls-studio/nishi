import React from 'react';
import './location.scss';
import '../Landing/landing.scss';

const Location = () => (
  <div id="page-wrap" className="MainContainer">
    <div className="ContentContainer">
      <div id="location" data-aos="fade-up">
        <div className="location-item westLA">
          <div className="location-overlay">
            <h3>West LA</h3>
            <p>2536 Overland Ave.</p>
            <p>Los Angeles, CA 90064</p>
            <p>(424) 361-5001</p>
            <p>M-Sat 11:30a - 9:30p</p>
            <p>Sun 12p - 7p</p>
            <div className="location-buttons">
              <a href="https://ordering.chownow.com/order/9755/locations?add_cn_ordering_class=true" target="_blank" className="location-order">Order Now</a>
              <a href="https://maps.google.com/?q=2536 Overland Ave, Los Angeles, CA 90064" target="_blank" className="location-directions">Get Directions</a>
            </div>
          </div>
        </div>
        <div className="location-item culver">
          <div className="location-overlay">
            <h3>Culver City</h3>
            <p>4263 Overland Ave.</p>
            <p>Culver City, CA 90230</p>
            <p>(424) 361-5001</p>
            <p>M-Sat 11:30a - 9:30p</p>
            <p>Sun 12p - 7p</p>
            <div className="location-buttons">
              <a href="https://ordering.chownow.com/order/9755/locations?add_cn_ordering_class=true" target="_blank" className="location-order">Order Now</a>
              <a href="https://maps.google.com/?q=4263 Overland Ave, Culver City, CA 90230" className="location-directions">Get Directions</a>
            </div>
          </div>
        </div>
        <div className="location-item buenaPark">
          <div className="location-overlay">
            <h3>Buena Park</h3>
            <p>6242 Beach Blvd. #A</p>
            <p>Buena Park, CA 90621</p>
            <p>(714) 522-2667</p>
            <p>M-Sat 11:00a - 9:00p</p>
            <p>Sun CLOSED</p>
            <div className="location-buttons">
              <a href="https://ordering.chownow.com/order/9755/locations?add_cn_ordering_class=true" target="_blank" className="location-order">Order Now</a>
              <a href="https://maps.google.com/?q=2536 Overland Ave, Los Angeles, CA 90064" target="_blank" className="location-directions">Get Directions</a>
            </div>
          </div>
        </div>
        <div className="location-item midCity">
          <div className="location-overlay">
            <h3>Mid City</h3>
            <p>COMING SOON</p>
            {/* <p>6242 Beach Blvd. #A</p>
            <p>Buena Park, CA 90621</p>
            <p>(714) 522-2667</p>
            <p>M-Sat 11:00a - 9:00p</p>
            <p>Sun CLOSED</p>
            <div className="location-buttons">
              <a href="https://ordering.chownow.com/order/9755/locations?add_cn_ordering_class=true" target="_blank" className="location-order">Order Now</a>
              <a href="https://maps.google.com/?q=2536 Overland Ave, Los Angeles, CA 90064" target="_blank" className="location-directions">Get Directions</a>
            </div> */}
          </div>
        </div>
      </div>

    </div>
  </div>
);
export default Location;