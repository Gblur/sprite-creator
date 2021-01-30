/** @format */

import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Grid from './components/grid/index';
import { store } from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Grid />
      </div>
    </Provider>
  );
}

export default App;
