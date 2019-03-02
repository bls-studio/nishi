import React, { Component } from 'react';
import './navigation.scss';
import { push as Menu } from 'react-burger-menu';

const logo = 'https://s3.amazonaws.com/nishi-blakeswl/download.png';

export default class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      header: {
        background: "none"
      },
      order: {
        background: "none",
        color: "#484848",
        height: "0"
      }
    }
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }
  listenScrollEvent(e) {
    if (window.scrollY > 900) {
      this.setState({header: {background:'white', boxShadow: "0 0 3px rgba(0,0,0,.15)", transition: ".1s ease-in"}, order: {background: "#B5D24B", transition: ".1s ease-in", color: "white", height: "100%"}
    })
    } else {
      this.setState({header: {background: 'none', boxShadow: "none", transition: ".1s ease-in"}, order: {background: "none", transition: ".1s ease-in", color: "#484848"}})
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  render() {
    return (
      <div>
        <Menu left id="burger" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <nav className="nav">
            <ul>
              <li><a href="#" className="bm-item-list">Home</a></li>
              <li><a href="#menu" className="bm-item-list">Menu</a></li>
              <li><a href="#location" className="bm-item-list">Location</a></li>
              <li><a href="#gallery" className="bm-item-list">Gallery</a></li>
              <li><a href="#contact" className="bm-item-list">Contact</a></li>
              <li><a href="https://ordering.chownow.com/order/9755/locations?add_cn_ordering_class=true" target="_blank" className="order">Order Now</a></li>
            </ul>
          </nav>
        </Menu>
        <div id="navbar-desktop" style={this.state.header}>
          <nav className="navbar">
            <div className="navbar-left">
              <img src={logo} alt="" className="nishi-logo"/>
            </div>
            <ul className="navbar-item">
              <li><a href="#" className="bm-item-list">Home</a></li>
              <li><a href="#menu" className="bm-item-list">Menu</a></li>
              <li><a href="#location" className="bm-item-list">Location</a></li>
              <li><a href="#gallery" className="bm-item-list">Gallery</a></li>
              <li><a href="#contact" className="bm-item-list">Contact</a></li>
              <li><a href="https://ordering.chownow.com/order/9755/locations?add_cn_ordering_class=true" target="_blank" className="order" style={this.state.order}>Order Now</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
};

