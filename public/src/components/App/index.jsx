import React from 'react';
import { Route, Switch  } from 'react-router-dom';



import Left from '../DigitalMenu/LeftScreen';
import Center from '../DigitalMenu/CenterScreen';
import Right from '../DigitalMenu/RightScreen';
import Home from './switch.jsx';

const App = () => (
  <div id="outer-container" className="parallax">
    <Right />
    {/* <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/right" component={Left}/>
      <Route exact path="/center" component={Center}/>
      <Route exact path="/left" component={Right}/>
    </Switch> */}
  </div>
);
{/* <Menu /> */}

export default App;