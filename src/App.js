import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Reservation from './components/pages/Reservation';
import Menus from './components/pages/Menus';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';  //Pour le routing




function App() {
  return (
    <Router>  
      
      <div>
          <Navbar/> 
          <Switch> 
              <Route exact path="/">
                <Home/>
              </Route>

              <Route path="/about">
                <About/>
              </Route>

              <Route path="/contact">
              <Contact/>
              </Route>

              <Route path="/reservation">
              <Reservation/>
              </Route>

              <Route path="/menus">
              <Menus/>
              </Route>
          </Switch>
          <Footer/>
      </div>
      
    </Router>

  );
}

export default App;
//Switch pour ne pas load home statically. Mettre toutes les routes dans Switch
//Quand onutilise Switch, il faut forcement definir le path exact (Acceuil par exemple car il apparait partout)