import React, { Component } from 'react';
import './ramenMenu.scss';

// Icons
import { Icon } from 'react-icons-kit';
import {circleRight} from 'react-icons-kit/icomoon/circleRight';
import {circleLeft} from 'react-icons-kit/icomoon/circleLeft';

// Images
const tonRamen = 'https://s3.amazonaws.com/nishi-blakeswl/ramenTrans.png';
const misoRamen = 'https://s3.amazonaws.com/nishi-blakeswl/pmmiso_clipped_rev_1.png';
const shoyuRamen = 'https://s3.amazonaws.com/nishi-blakeswl/pmshoyu_clipped_rev_1.png';
const veggieRamen = 'https://s3.amazonaws.com/nishi-blakeswl/pmveg_clipped_rev_1.png';


const menuPDF = 'https://s3.amazonaws.com/nishi-blakeswl/menu.pdf';


export default class RamenMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      ramenName: ["Tonkotsu", "Spicy Miso 🌶", "Chicken Shoyu", "Vegetarian"],
      // ramenImg: [tonRamen: , misoRamen, shoyuRamen, veggieRamen]
      // tonkatsu: [tonRamen, "Tonkatsu"], 
      // miso: [misoRamen, "Spicy Miso"], 
      // shoyu: [shoyuRamen, "Shoyu"], 
      // vegetarian: [veggieRamen, "Vegetarian"]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // handleNext() {
  //   let ramen = this.state.ramenImg, ramenImage;
  //   for (let i = 0; i < ramen.length; i++) {
  //     ramenImage = ramen[3];
  //     console.log(ramenImage)
  //   }
  //   return ramenImage;
  // }
  handleClick() {
    let ramenName = this.state.ramenName;
    for (let i = 0; i < ramenName.length; i++) {
      if (ramenName[i] === "Tonkotsu") {
        console.log('yes', ramenName[i])
      } else {
        console.log('no')
      }
    }
    // console.log('clicked', this.state.ramenName)
  }
  render() {
    let ramen = this.state.ramenName
    return(
      <div id="ramenCon">
        <h3 className="menu-category">Ramen</h3>
        <div id="ramenMenu">
          <div className="ramenRight">
            <div className="left_left">
              <div id="ramenItems">
                <div className="itemNprice">
                  <h3 className="item tonkatsu" onClick={this.handleClick}>{this.state.ramenName[0]}</h3>
                </div>
                <p>Pork broth, pork chashu, green onion, spinach, bean sprouts, seaweed.</p>
              </div>
              <div id="ramenItems">
                <div className="itemNprice">
                    <h3 className="item" onClick={this.handleClick}>{this.state.ramenName[1]}</h3>
                  </div>
                  <p>Miso broth, pork chashu, green onion, spinach, bean sprouts, cabbage, bamboo shoots, seaweed.</p>
                </div>
              <div id="ramenItems">
                <div className="itemNprice">
                  <h3 className="item">{this.state.ramenName[2]}</h3>
                </div>
                <p>Chicken Broth, Chicken, White Onions, Bamboo Shoots, Seaweed, Alfalfa Sprouts.</p>
              </div>
              <div id="ramenItems">
                <div className="itemNprice">
                  <h3 className="item">{this.state.ramenName[3]}</h3>
                </div>
                <p>Sesame miso broth, broccoli, tofu, corn, bean sprouts, spring mix, sesame oil.</p>
              </div>
            </div>
          </div>
          <div className="ramenLeft">
            <img src={tonRamen} className="ramenImage1" alt="ramen"/>
            <h3 className="ramenTitle">Tonkotsu</h3>

            {/* {this.state.ramenImg.forEach(ramen => { */}
              {/* <img src={this.handleNext()} alt="" className="ramenImage1"/> */}
            {/* })} */}
              {/* <Icon icon={circleRight} /> */}
          </div>
        </div>
          {/* <div className="menu-download"><a href={menuPDF} target="_blank">↠ View our full menu HERE ↞</a></div> */}
    
        <div className="menu-download"><h3>↠ View our full</h3>{'  '}<a href={menuPDF} target="_blank" rel="alternate">MENU HERE</a><h3>↞</h3></div>
      </div>
    )
  }
};
  // {/* <img src={this.handleNext} className="ramenImage1" alt="ramen"  data-aos-offset="500" data-aos-duration="200" data-aos-easing="linear"/> */} */}
  // {/* <h3 className="ramenTitle">{this.state.ramenImg}</h3>
  // {/* <button onClick={this.handleNext.bind(this)} > */}

{/* </button> */}
// onClick={this.handleNext.bind(this)}