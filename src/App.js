import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import IPForm from './components/IPForm';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import OutputView from "./components/OutputView";
import Home from './components/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
            <Switch>
              <Route path="/output/:id" component={(props) => <OutputView {...props}/>} />
              <Route path="/input/:existing" component={(props) => <IPForm title="Input Data - PD VRF Extension on Shared Infrastructure" {...props}/>} />
              <Route path="/" component={() => <Home title="IP Allocation Portal"/>} />
            </Switch>
            </BrowserRouter>
    </div>
  );
}

export default App;
