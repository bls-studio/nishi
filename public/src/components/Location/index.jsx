import React from 'react';
import './location.scss';

const Location = () => (
  <div id="page-wrap">
    <div id="location">
      <div className="location-item westLA">
        <div className="location-overlay">
          <h3>West LA</h3>
          <p>2536 Overland Ave.</p>
          <p>Los Angeles, CA 90064</p>
          <p>(424) 361-5001</p>
          <p>M-Sat 11:30a - 9:30p</p>
          <p>Sun 12p - 7p</p>
        </div>
      </div>
      <div className="location-item culver">
        <div className="location-overlay">
            <h3>Culver City</h3>
            <p>2536 Overland Ave.</p>
            <p>Los Angeles, CA 90064</p>
            <p>(424) 361-5001</p>
            <p>M-Sat 11:30a - 9:30p</p>
            <p>Sun 12p - 7p</p>
          </div>
      </div>
    </div>
  </div>
);
export default Location;