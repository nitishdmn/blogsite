import React from 'react';
import './App.css';
import Home from './containers/home';
import Header from './components/Header';
import Page from './components/page';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Page/>
    </div>
  );
}

export default App;
