import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import HowToBuy from './components/pages/HowToBuy'; 
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    })
    AOS.refresh();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component=
            {Home} />  
            <Route path='/HowToBuy' exact component=
            {HowToBuy} />      
        </Switch>
      </Router>
    </>
  );
}

export default App;
