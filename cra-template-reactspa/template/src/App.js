import React from 'react';
import {store} from './redux/data-store'
import {Provider} from "react-redux";
import {Connect} from "./redux/connector"
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Connect></Connect>
    </Provider>
  );
}

export default App;
