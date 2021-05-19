import React from 'react'
import Countries from './components/countries/Countries';
import { Route } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/navbar/NavBar';
import Country from './components/country/Country';

function App() {
  return (
      <div className="App">
        <Route path='/countries' component={NavBar}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/countries' component={Countries}/>
        <Route exact path='/countries/:idPais' component={Country}/>
      </div>  
  );
}

export default App;
