import React from 'react';
import { Route, Switch  } from 'react-router-dom';



import Left from '../DigitalMenu/LeftScreen';
import Center from '../DigitalMenu/CenterScreen';
import Right from '../DigitalMenu/RightScreen';
import Home from './switch.jsx';
import Soon from '../ComingSoon';

const App = () => (
  <div id="outer-container" className="parallax">
    {/* <Soon /> */}
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/right" component={Left}/>
      <Route exact path="/center" component={Center}/>
      <Route exact path="/left" component={Right}/>
      <Route exact path="/soon" component={Soon} />
    </Switch>
  </div>
);
{/* <Menu /> */}

export default App;