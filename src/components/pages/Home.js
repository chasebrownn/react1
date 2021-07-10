import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import News from '../News';
import Roadmap from '../Roadmap';
import Tokenomics from '../Tokenomics';
import Team from '../Cards';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <Hero />
            <News/>
            <Roadmap />
            <Tokenomics />
            <Team />
            <Footer/>
        </>
    )
}

export default Home;