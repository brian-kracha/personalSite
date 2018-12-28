import React, { Component } from 'react';
import './App.css';
import HeaderView from "./components/headerView"
import snow from "./images/snow.jpeg"
import Carousel from "./components/Carousel"
class App extends Component {

  render() {
    return (
      <div >
        <HeaderView/>
        <br/>
        <br/>
        <Carousel/>
          <div className="container">
          </div>
      </div>


    );
  }
}

export default App;
