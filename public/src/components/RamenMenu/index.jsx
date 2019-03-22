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
      ramenName: "Tonkotsu 🐷",
      ramenImg: tonRamen,
    }
    this.tonkotsu = this.tonkotsu.bind(this);
    this.spicy = this.spicy.bind(this);
    this.shoyu = this.shoyu.bind(this);
    this.vegetarian = this.vegetarian.bind(this);
  }
  // componentDidMount() {
  //   this.handleClick();
  // }
  tonkotsu(e) {
    this.setState({ramenName: "Tonkotsu 🐷", ramenImg: tonRamen})
  }
  spicy() {
    this.setState({ramenName: "Spicy Miso 🌶", ramenImg: misoRamen})
  }
  shoyu() {
    this.setState({ramenName: "Chicken Shoyu 🐔", ramenImg: shoyuRamen})
  }
  vegetarian() {
    this.setState({ramenName: "Vegetarian 🥦", ramenImg: veggieRamen})
  } 

  render() {
    let tonkotsu = this.state.ramenName[0];
    return(
      <div id="ramenCon">
        <h3 className="menu-category">Ramen</h3>
        <div id="ramenMenu">
          <div className="ramenRight">
            <div className="left_left">
              <div id="ramenItems">
                <div className="itemNprice">
                  <h3 className="ramen" ref="title" onClick={this.tonkotsu}>Tonkotsu</h3>
                </div>
                <p>Pork broth, pork chashu, green onion, spinach, bean sprouts, seaweed.</p>
              </div>
              <div id="ramenItems">
                <div className="itemNprice">
                  <h3 className="ramen" onClick={this.spicy} value="Spicy Miso">Spicy Miso 🌶</h3>
                </div>
                <p>Miso broth, pork chashu, green onion, spinach, bean sprouts, cabbage, bamboo shoots, seaweed.</p>
              </div>
              <div id="ramenItems">
                <div className="itemNprice">
                  <h3 className="ramen" onClick={this.shoyu}>Chicken Shoyu</h3>
                </div>
                <p>Chicken Broth, Chicken, White Onions, Bamboo Shoots, Seaweed, Alfalfa Sprouts.</p>
              </div>
              <div id="ramenItems">
                <div className="itemNprice">
                  <h3 className="ramen" onClick={this.vegetarian}>Vegetarian</h3>
                </div>
                <p>Sesame miso broth, broccoli, tofu, corn, bean sprouts, spring mix, sesame oil.</p>
              </div>
            </div>
          </div>
          <div className="ramenLeft">
            <img src={this.state.ramenImg} className="ramenImage1" alt="ramen" ref="img"/>
            <h3 className="ramenTitle">{this.state.ramenName}</h3>

            {/* {this.state.ramenImg.forEach(ramen => { */}
              {/* <img src={this.handleNext()} alt="" className="ramenImage1"/> */}
            {/* })} */}
              {/* <Icon icon={circleRight} /> */}
          </div>
        </div>    
        <div className="menu-download"><h3>↠ View our full</h3>{'  '}<a href={menuPDF} target="_blank" rel="alternate">MENU HERE</a><h3>↞</h3></div>
      </div>
    )
  }
};
