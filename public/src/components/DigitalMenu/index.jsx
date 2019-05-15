import React from 'react';
import { Route, Switch  } from 'react-router-dom';

import Left from './LeftScreen';
import Center from './CenterScreen';
import Right from './RightScreen';

const Digital = () => (
  <Switch>
    <Route exact path="/right" component={Left}/>
    <Route exact path="/middle" component={Center}/>
    <Route exact path="/left" component={Right}/>
  </Switch>
)
export default Digital;