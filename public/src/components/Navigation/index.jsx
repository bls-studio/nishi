import React from 'react';
import './navigation.scss';
import { push as Menu } from 'react-burger-menu';

import logo from '../../../dist/assets/download.png';

const Navigation = () => (
  <div>
    <Menu left id="burger" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <nav className="nav">
        <ul>
          <li><a href="#home" className="bm-item-list">Home</a></li>
          <li><a href="#menu" className="bm-item-list">Menu</a></li>
          <li><a href="#location" className="bm-item-list">Location</a></li>
          <li><a href="#gallery" className="bm-item-list">Gallery</a></li>
          <li><a href="#contact" className="bm-item-list">Contact</a></li>
          <li><a href="https://ordering.chownow.com/order/9755/locations?add_cn_ordering_class=true" target="_blank" className="order">Order Now</a></li>
        </ul>
      </nav>
    </Menu>
    <div id="navbar-desktop">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="" className="nishi-logo"/>
        </div>
        <ul className="navbar-item">
          <li><a href="#home" className="bm-item-list">Home</a></li>
          <li><a href="#menu" className="bm-item-list">Menu</a></li>
          <li><a href="#location" className="bm-item-list">Location</a></li>
          <li><a href="#gallery" className="bm-item-list">Gallery</a></li>
          <li><a href="#contact" className="bm-item-list">Contact</a></li>
          <li><a href="https://ordering.chownow.com/order/9755/locations?add_cn_ordering_class=true" target="_blank" className="bm-item-list order">Order Now</a></li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Navigation;