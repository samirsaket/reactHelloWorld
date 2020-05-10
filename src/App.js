import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './componenets/Greet';

import Hello from './componenets/Hello';
import Message from './componenets/Message';
import Counter from './componenets/Counter';
import functionClick from './componenets/functionClick';
import LifeCycleDemo from './componenets/ClassComponentLifeCycle'

import Welcome from  './MyFirstComponent/Welcome';
import WelcomeFunctional from './MyFirstComponent/WelcomeFunctional';


import Cards from './Cards/cards';
import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel';
import $ from 'jquery';
const bootstrap = require('bootstrap');

 

class App extends Component {
  render() {
    return (
      <div className="App">
      {/*<functionClick /> */}
      {/*<Counter /> 
       */}
      {/* <Greet name="samir" heroName="superMan" />  
        <Greet name="Diana">
        <button>action</button>
        </Greet> 
        <Welcome name="samir" heroName="superMan" ></Welcome> 
      LifeCycleDemo /> */}

      <Welcome/>
      

      </div>
    );
  }
}

export default App;
