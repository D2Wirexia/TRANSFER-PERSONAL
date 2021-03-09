import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Vacancies from "./components/Vacansions/Vacancies";
import Neon from "./components/Neon";
import HomeContainer from "./components/Home/HomeContainer";
import ServicesContainer from "./components/Services/ServicesContainer";


const App = () => {

  return (
      <div className="App">
         <Header />
         <Route  path="/" render={() => <Neon/>} />
         <Route path="/main" render={() => <HomeContainer />} />
         <Route path="/vacancies" render={() => <Vacancies />} />
         <Route path="/services" render={() => <ServicesContainer />} />
         <Route path="/contacts" render={() =>  <Contacts />} />
      </div>
);
}

export default App;
