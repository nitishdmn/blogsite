import React from 'react';
import './App.css';
import Home from './containers/home';
import Header from './components/Header';
import Page from './components/page';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Page/>
        <Route path="/" exact component={Home}/>
        <Route path="/contact-us"component={ContactUs}/>
        <Route path="/posts/:slug" component={Post}/>
       
     </div> 
    </Router>
  );
}

export default App;
