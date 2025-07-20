import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Works from '../Skills/Skills';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <AboutMe></AboutMe>
             <Works></Works>
        </div>
    );
};

export default Home;