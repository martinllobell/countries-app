import React from 'react'
import Countries from './components/countries/Countries';
import { Route } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/navbar/NavBar';
import Country from './components/country/Country';
import CountriesFounded from './components/founded/CountriesFounded';
import Activdades from './components/actividades/Actividad-Main';
import Filtros from './components/filters/Filtros';
import FilterResults from './components/filters/Filter-Results';
import ViewActivities from './components/actividades/ViewActividades';

function App() {
  return (
      <div className="App">

        {/* Nav-Bar */}
        <Route exact path='/countries/:idPais' component={NavBar}/>
        <Route exact path='/countries' component={NavBar}/>
        <Route exact path='/founded' component={NavBar}/>
        <Route exact path='/activity' component={NavBar}/>
        <Route exact path='/filtros' component={NavBar}/>
        <Route exact path='/filtros/filtrados' component={NavBar}/>
        <Route exact path='/activity/all' component={NavBar}/>
        {/* Varios */}
        <Route exact path='/' component={Home}/>
        <Route exact path='/countries' component={Countries}/>
        <Route exact path='/countries/:idPais' component={Country}/>
        <Route exact path='/founded' component={CountriesFounded}/>
        <Route exact path='/activity' component={Activdades}/>
        <Route exact path='/filtros' component={Filtros}/>
        <Route exact path='/activity/all' component={ViewActivities}/>
        <Route exact path='/filtros/filtrados' component={FilterResults}/>
        
      </div>  
  );
}

export default App;
