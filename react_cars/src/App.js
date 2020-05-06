import React from 'react';
import logo from './logo.svg';
import './App.css';

import './Cads/CardUI';
import './Cads/Cards';
import {Route, Link} from 'react-router-dom';
import Cards from './Cads/Cards'; 
import NavBar from "./NavBar";
import form from './form';
import info from './Cads/info';

function App() {
    return(
      <div className="App">
        <NavBar />
        <Route exact path="/" component={form} />
        <Route exact path="/Cards" component={Cards} />
        <Route exact path="/info" component={info} />
       

      </div>
    );
}
 


export default App;
