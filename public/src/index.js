import React from 'react';
import { render } from 'react-dom';
// import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router } from 'react-router-dom';


import './components/App/reset.scss';

import App from './components/App';

render(<Router><App /></Router>, document.getElementById('root'));
