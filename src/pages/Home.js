import React from 'react';
import Team from '../components/Team';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import CoreValues from '../components/CoreValues';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <CoreValues />
            <Team />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

