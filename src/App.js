import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Main from './Main';
import './App.css';
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
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
