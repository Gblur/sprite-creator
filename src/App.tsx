/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @format */

import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Grid from './components/grid/index';
import { SignUp } from './components/auth/SignUp';
import { store } from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  // store.subscribe(() => {
  //   saveState(store.getState().tiles.tiles);
  // });

  return (
    <Provider store={store}>
      <div className="App ">
        <Router>
          <Switch>
            <Route path="/grid" component={Grid} />
            <Route path="/" component={SignUp} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
