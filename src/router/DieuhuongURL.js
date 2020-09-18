import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import News from './../Components/News';
import Home from './../Components/Home';
import New_detail from '../Components/New_detail';
import Contact from '../Components/Contact';
class DieuhuongURL extends Component {
    render() {
        return (
            <Router>
      <div>
          <Route exact path="/"  component={Home}/>
          <Route exact path="/home"  component={Home}/>
          <Route exact path="/tin" component={News}/>
          <Route exact path="/tin-tuc/:slug.:id.html" component={New_detail}/>
          <Route exact path="/lien-he" component={Contact}/>

          
         
         
      </div>
    </Router>
        );
    }
}

export default DieuhuongURL;