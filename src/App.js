import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Vacancies from "./components/Vacansions/Vacancies";
import HomeContainer from "./components/Home/HomeContainer";
import ServicesContainer from "./components/Services/ServicesContainer";
import NeonContainer from "./components/Neon/NeonContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
   //exact
  return (
      <div className="App">
         <HeaderContainer />
         <Route path="/" render={() => <NeonContainer/>} />
         <Route path="/main" render={() => <HomeContainer />} />
         <Route path="/vacancies" render={() => <Vacancies />} />
         <Route path="/services" render={() => <ServicesContainer />} />
         <Route path="/contacts" render={() =>  <Contacts />} />
      </div>
);
}

export default App;
