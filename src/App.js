import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Vacansions from "./components/Vacansions/Vacansions";
import Neon from "./components/Neon";
import HomeContainer from "./components/Home/HomeContainer";
import ServicesContainer from "./components/Services/ServicesContainer";


const App = () => {

  return (
      <div className="App">
         <Header />
         <Route exact path="/" component={Neon} />
         <Route exact path="/main" render={() => <HomeContainer />} />
         <Route exact path="/vacancies" render={() => <Vacansions />} />
         <Route exact path="/services" render={() => <ServicesContainer />} />
         <Route exact path="/contacts" render={() =>  <Contacts />} />
      </div>
);
}

export default App;
