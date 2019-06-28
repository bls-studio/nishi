import React, { Component } from 'react';
import './navigation.scss';
import { push as Menu } from 'react-burger-menu';
import { HashLink as Link } from 'react-router-hash-link';





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
      }
    }
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }
  listenScrollEvent(e) {
    if (window.scrollY > 900) {
      this.setState({header: {background:'white', boxShadow: "0 0 3px rgba(0,0,0,.15)", transition: ".1s ease-in"}, order: {background: "#B5D24B", transition: ".1s ease-in", color: "white", boxShadow: "0 0 3px rgba(0,0,0,.15)"}
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
              <li><Link smooth to="#home" className="bm-item-list">Home</Link></li>
              <li><Link smooth to="#menu" className="bm-item-list">Menu</Link></li>
              <li><Link smooth to="#location" className="bm-item-list">Locations</Link></li>
              <li><Link smooth to="#gallery" className="bm-item-list">Gallery</Link></li>
              {/* <li><Link smooth to="#contact" className="bm-item-list">Contact</Link></li> */}
              <li className="order"><a href="https://ordering.chownow.com/order/9755/locations?add_cn_ordering_class=true" target="_blank">Order Now</a></li>
            </ul>
          </nav>
        </Menu>
        <div id="navbar-desktop" style={this.state.header}>
          <nav className="navbar">
            <div className="navbar-left">
              <img src={logo} alt="nishi logo" className="nishi-logo"/>
            </div>
            <ul className="navbar-item">
              <li><Link smooth to="#home" className="bm-item-list">Home</Link></li>
              <li><Link smooth to="#menu" className="bm-item-list">Menu</Link></li>
              <li><Link smooth to="#location" className="bm-item-list">Locations</Link></li>
              <li><Link smooth to="#gallery" className="bm-item-list">Gallery</Link></li>
              {/* <li><Link smooth to="#contact" className="bm-item-list">Contact</Link></li> */}
              <div className="order" style={this.state.order}>
                <li><a href="https://ordering.chownow.com/order/9755/locations?add_cn_ordering_class=true" target="_blank" >Order Now</a></li>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
};

