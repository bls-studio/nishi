import React from 'react';
import { render } from 'react-dom';
import { ParallaxProvider } from 'react-scroll-parallax';


import './components/App/reset.scss';

import App from './components/App';

render(<ParallaxProvider><App /></ParallaxProvider>, document.getElementById('root'));