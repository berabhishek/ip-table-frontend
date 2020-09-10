import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import IPForm from './components/IPForm';

function App() {
  return (
    <div>
      <Header title="IP Demo"/>
      <IPForm title="Input Data - PD VRF Extension on Shared Infrastructure"/>
    </div>
  );
}

export default App;
