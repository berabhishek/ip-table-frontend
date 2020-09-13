import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import IPForm from './components/IPForm';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import OutputView from "./components/OutputView";


function App() {
  return (
    <div>
      <Header title="IP Demo"/>
      <BrowserRouter>
            <Switch>
              <Route path="/output" component={OutputView} />
              <Route path="/" component={() => <IPForm title="Input Data - PD VRF Extension on Shared Infrastructure"/>} />
            </Switch>
            </BrowserRouter>
    </div>
  );
}

export default App;
