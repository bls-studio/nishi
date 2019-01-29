import React from 'react';
import './navigation.scss';
import { push as Menu } from 'react-burger-menu';

const Navigation = () => (
  <Menu left id="burger" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
    <nav className="nav">
      <ul>
        <li><a href="#home" className="bm-item-list">Home</a></li>
        <li><a href="#menu" className="bm-item-list">Menu</a></li>
        <li><a href="#location" className="bm-item-list">Location</a></li>
        <li><a href="#gallery" className="bm-item-list">Gallery</a></li>
        <li><a href="#contact" className="bm-item-list">Contact</a></li>
        {/* <li><a className="order">Order Now</a></li> */}
      </ul>
    </nav>
  </Menu>
);

export default Navigation;