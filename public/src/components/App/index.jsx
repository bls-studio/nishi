import React from 'react';
import 'smoothscroll';

import Navigation from '../Navigation';
import Landing from '../Landing';
import Menu from '../Menu';
import Location from '../Location';
import Gallery from '../Gallery';
import Contact from '../Contact';

const App = () => (
  <div id="outer-container">
    <Navigation />
    <Landing />
    <Menu />
    <Location />
    <Gallery />
    <Contact />
  </div>
);

export default App;