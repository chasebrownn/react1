import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Team from '../Cards';
import Roadmap from '../Roadmap';
import News from '../News';

function Home () {
    return (
        <>
            <Hero />
            <News/>
            <Roadmap />
            <Team />
        </>
    )
}

export default Home;