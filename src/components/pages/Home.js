import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import News from '../News';
import Exchanges from '../Exchanges';
import Roadmap from '../Roadmap';
import Tokenomics from '../Tokenomics';
import Brand from '../Brand';
import Team from '../Cards';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <Hero />
            <News/>
            <Exchanges/>
            <Roadmap />
            <Tokenomics />
            <Brand />
            <Team />
            <Footer/>
        </>
    )
}

export default Home;