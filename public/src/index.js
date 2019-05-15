import React from 'react';
import { render } from 'react-dom';
// import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './components/App/reset.scss';

import App from './components/App';

render(<Router><Switch><Route exact path="/" component={App}></Route></Switch></Router>, document.getElementById('root'));
